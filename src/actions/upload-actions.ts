'use server';

import { db } from '@/db';
import { pdfSummaries } from '@/db/schema';
import { generateSummaryFromGemini } from '@/lib/geminiai';
import { fetchAndExtractPdfText } from '@/lib/langchain';
import { generateSummaryFromOpenAI } from '@/lib/openai';
import { formatFileNameAsTitle } from '@/utils/format-utils';
import { auth } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

interface PdfSummaryType {
  userId: string;
  fileUrl: string;
  summary: string;
  title: string;
  fileName: string;
}

export async function generatePDFSummary(
  uploadResponse: Array<{
    serverData: {
      userId: string;
      file: {
        ufsUrl: string;
        name: string;
      };
    };
  }>,
) {
  if (!uploadResponse || uploadResponse.length === 0) {
    return {
      success: false,
      message: 'File upload failed or empty response',
      data: null,
    };
  }

  const {
    serverData: {
      userId,
      file: { ufsUrl: pdfUrl, name: fileName },
    },
  } = uploadResponse[0];

  if (!pdfUrl) {
    return {
      success: false,
      message: 'File upload failed',
      data: null,
    };
  }

  try {
    const pdfText = await fetchAndExtractPdfText(pdfUrl);
    console.log({ pdfText });

    let summary;
    try {
      summary = await generateSummaryFromOpenAI(pdfText);
      console.log({ summary });
    } catch (error) {
      console.log(error);

      //call gemini code if OpenAI fails
      if (error) {
        try {
          summary = await generateSummaryFromGemini(pdfText);
        } catch (geminiError) {
          console.error(
            'Gemini API failed after OPENAI quote exceeded',
            geminiError,
          );
          throw new Error(
            'Failed to generate summary with available AI providers',
          );
        }
      }
    }

    if (!summary) {
      return {
        success: false,
        message: 'Failed to generate summary',
        data: null,
      };
    }

    const formattedFileName = formatFileNameAsTitle(fileName);

    return {
      success: true,
      message: 'Summary generated successfully',
      data: {
        title: formattedFileName,
        summary,
      },
    };
  } catch (err: any) {
    return {
      success: false,
      message: err.message || 'Failed to generate summary',
      data: null,
    };
  }
}

async function savePdfSummary({
  userId,
  fileUrl,
  summary,
  title,
  fileName,
}: PdfSummaryType) {
  try {
    const [savedSummary] = await db
      .insert(pdfSummaries)
      .values({
        userId,
        originalFileUrl: fileUrl,
        summaryText: summary,
        title,
        fileName,
      })
      .returning({ id: pdfSummaries.id, summaryText: pdfSummaries.summaryText });
    return savedSummary;
  } catch (error) {
    console.error('Error saving PDF summary', error);
    throw error;
  }
}

export async function storePdfSummaryAction({
  fileUrl,
  summary,
  title,
  fileName,
}: Omit<PdfSummaryType, 'userId'>) {
  let savedSummary: any;
  try {
    const { userId } = await auth();
    if (!userId) {
      return {
        success: false,
        message: 'User not found',
      };
    }
    savedSummary = await savePdfSummary({
      userId,
      fileUrl,
      summary,
      title,
      fileName,
    });

    if (!savedSummary) {
      return {
        success: false,
        message: 'Failed to save PDF summary, please try again...',
      };
    }
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : 'Error saving PDF summary',
    };
  }

  // Revalidation for cache
  revalidatePath(`/summaries/${savedSummary.id}`);

  return {
    success: true,
    message: 'PDF summary saved successfully',
    id: savedSummary.id,
  };
}
