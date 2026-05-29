import BgGradient from '@/components/common/bg-gradient';
import SummaryCard from '@/components/summaries/summary-card';
import { Button } from '@/components/ui/button';
import { getSummaries } from '@/lib/summaries';
import { auth } from '@/lib/auth';
import { Plus } from 'lucide-react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import EmptySummaryState from '@/components/summaries/empty-summary-state';
import {
  MotionDiv,
  MotionH1,
  MotionP,
} from '@/components/common/motion-wrapper';
import { itemVariants } from '@/utils/constants';

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    return redirect('/sign-in');
  }

  const summaries = await getSummaries(userId);

  return (
    <main className="max-w-7xl mx-auto">
      <BgGradient className="from-emerald-200 via-teal-200 to-cyan-200" />
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto flex flex-col gap-4"
      >
        <div className="px-2 py-12 sm:py-24">
          <div className="flex gap-4 mb-8 justify-between">
            <div className="flex flex-col gap-2">
              <MotionH1
                variants={itemVariants as any}
                initial="hidden"
                whileInView="visible"
                className="text-4xl font-bold tracking-tight bg-linear-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent"
              >
                Your Summaries
              </MotionH1>
              <MotionP
                variants={itemVariants as any}
                initial="hidden"
                whileInView="visible"
                className="text-gray-600"
              >
                Transform your PDFs into concise, actionable insights
              </MotionP>
            </div>
            <MotionDiv
              variants={itemVariants as any}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              className="self-start"
            >
              <Button
                variant={'link'}
                className="bg-linear-to-r from-rose-500 to-rose-700 hover:from-rose-600 hover:to-rose-800 hover:scale-105 transition-all duration-300 group hover:no-underline"
              >
                <Link href={'/upload'} className="flex items-center text-white">
                  <Plus className="w-5 h-5 mr-2" />
                  New Summary
                </Link>
              </Button>
            </MotionDiv>
          </div>
          {summaries.length === 0 ? (
            <EmptySummaryState />
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 sm:px-0">
              {summaries.map((summary, index) => (
                <SummaryCard key={index} summary={summary} />
              ))}
            </div>
          )}
        </div>
      </MotionDiv>
    </main>
  );
}
