import { GoogleGenerativeAI } from '@google/generative-ai';
import { SUMMARY_SYSTEM_PROMPT } from '@/utils/prompts';

// Initialize the Gemini API with your API key
const apiKey = process.env.GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(apiKey);

export const generateSummaryFromGemini = async (pdfText: string) => {
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is missing from environment variables');
  }

  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1500,
      },
    });

    const prompt = {
      contents: [
        {
          role: 'user',
          parts: [
            { text: SUMMARY_SYSTEM_PROMPT },
            {
              text: `Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}`,
            },
          ],
        },
      ],
    };

    const result = await model.generateContent(prompt);
    const response = await result.response;

    if (!response.text()) {
      throw new Error('Empty response from Gemini API');
    }

    return response.text();
  } catch (error: any) {
    if (error?.status === 429) {
      throw new Error('RATE_LIMIT_EXCEEDED');
    }
    console.error('Gemini API Error:', error);
    throw error;
  }
};
