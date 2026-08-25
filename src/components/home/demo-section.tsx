import { Pizza } from 'lucide-react';
import { MotionDiv, MotionH3 } from '../common/motion-wrapper';
import { SummaryViewer } from '../summaries/summary-viewer';

const DEMO_SUMMARY = `# Quick Overview
• 🍓 Comprehensive Next.js 15 course covering everything from fundamentals to advanced deployment strategies.
• 🎯 Designed for developers who want to go from basic React to building full production-grade Next.js apps.
• ⏱️ Covers the complete journey — from first page to deployed application — in one structured PDF guide.
# Document Details
• 📄 Type: Technical Course PDF on Next.js 15
• 🎓 Level: Intermediate to Advanced — prior React knowledge recommended.
• 🕐 Content spans routing, rendering, data fetching, auth, and deployment best practices.
# Key Highlights
• 🚀 Complete guide to Next.js 15's App Router and its file-based routing system.
• 🌟 Server Components & Server Actions deep dive with real-world examples.
• ⚡ Covers Streaming, Suspense boundaries, and Partial Pre-rendering for maximum performance.
# Why It Matters
• 💡 Next.js is becoming the industry standard for React applications, offering superior performance, SEO, and developer experience.
• 🌍 Companies like Vercel, Netflix, and TikTok rely on Next.js to power their production frontends.
• 📈 Knowing Next.js 15 makes you significantly more hireable and enables building enterprise-grade apps solo.
# Main Points
• 🎨 Modern application architecture with App Router and nested layouts.
• 🔲 Server and Client Components best practices — when to use each and why it matters.
• 📋 Data fetching patterns and caching strategies using fetch, React cache, and revalidation.
# Pro Tips
• 🌟 Always consider server components as your default choice — only opt into client when needed.
• 💎 Implement route groups to organise your codebase without affecting URL structure.
• 💡 Use loading.tsx and error.tsx at every route level for a polished, resilient UX.
# Key Terms to Know
• 🔋 Server Components: React components that render on the server for better performance and zero client JS.
• 🔄 Server Actions: Async functions that run on the server, replacing traditional API route handlers.
• 🗂️ App Router: The modern Next.js routing system based on the file system inside the /app directory.
# Bottom Line
• 📐 Master Next.js 15 to build fast, scalable, and SEO-friendly web applications with the latest features.
• 🏆 This PDF is the most up-to-date reference for learning production Next.js in 2025 and beyond.
• 🎯 By the end, you will have the skills to architect, build, and ship full-stack Next.js applications confidently.
# Final Thoughts
• 🔥 This course transforms developers into Next.js experts ready to build production-ready applications.
• 🚀 The skills learned here directly translate to real freelance projects, jobs, and personal products.
• ⭐ Highly recommended for any developer serious about mastering the modern React ecosystem.`;

export default function DemoSection() {
  return (
    <section>
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-30 sm:left-[calc(50%-36rem)] sm:w-288.75"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1%, 97.7%, 74.1% 44.1%',
            }}
          />
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-gray-100/80 backdrop-blur-xs border border-gray-500/20 mb-4">
            <Pizza className="w-6 h-6 text-rose-500" />
          </div>
          <div className="text-center mb-16">
            <MotionH3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6"
            >
              Watch how AI PDF Summariser transform{' '}
              <span className="bg-linear-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
                this Next.js course PDF
              </span>{' '}
              ino an easy-to-read summary!
            </MotionH3>
          </div>
        </div>

        <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SummaryViewer summary={DEMO_SUMMARY} />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
