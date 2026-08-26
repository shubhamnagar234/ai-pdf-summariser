import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { MotionDiv } from '@/components/common/motion-wrapper';
import { buttonVariants } from '@/utils/constants';

export default function CTASection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Save Hours of Reading Time?
            </h2>
            <p className="mx-auto max-w-175 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Transform lengthy documents into clear, actionable insights with
              our AI-powered summarizer
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
          <MotionDiv whileHover={buttonVariants.hover as any}>
            <Button
              variant={'link'}
              className="w-full min-[400px]:w-auto text-white text-base sm:text-lg lg:text-xl rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 hover:no-underline font-bold shadow-lg transition-all duration-300"
            >
              <Link
                href={'/dashboard'}
                className="flex gap-2 items-center justify-center"
              >
                <span>Get Started</span>
                <ArrowRight className="animate-pulse" />
              </Link>
            </Button>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
