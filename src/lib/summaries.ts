import { db } from '@/db';
import { pdfSummaries } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';

export async function getSummaries(userId: string) {
  const summaries = await db
    .select()
    .from(pdfSummaries)
    .where(eq(pdfSummaries.userId, userId))
    .orderBy(desc(pdfSummaries.createdAt));
  return summaries;
}

export async function getSummaryById(id: string) {
  try {
    const [summary] = await db
      .select()
      .from(pdfSummaries)
      .where(eq(pdfSummaries.id, id));

    if (summary) {
      return {
        ...summary,
        word_count: summary.summaryText.trim().split(/\s+/).length,
      };
    }
    return null;
  } catch (err) {
    console.error('Error fetching summary by id', err);
    return null;
  }
}
