'use server';

import { db } from '@/db';
import { pdfSummaries } from '@/db/schema';
import { auth } from '@/lib/auth';
import { eq, and } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function deleteSummaryAction({
  summaryId,
}: {
  summaryId: string;
}) {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error('User not found');
    }

    const result = await db
      .delete(pdfSummaries)
      .where(and(eq(pdfSummaries.id, summaryId), eq(pdfSummaries.userId, userId)))
      .returning({ id: pdfSummaries.id });

    if (result.length > 0) {
      revalidatePath('/dashboard');
      return { success: true };
    }
    return { success: false };
  } catch (error) {
    console.error('Error deleting summary', error);
    return { success: false };
  }
}
