import BgGradient from "@/components/common/bg-gradient";
import CTASection from "@/components/home/cta-section";
import { GraduationCap, Briefcase, Microscope, TrendingUp } from "lucide-react";

export default function UseCasesPage() {
  return (
    <div className="relative w-full min-h-screen">
      <BgGradient />

      {/* Header */}
      <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
          Built for every{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-500 to-rose-700">
            workflow
          </span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Discover how AI PDF Summariser helps different professionals and
          learners digest massive documents in a fraction of the time.
        </p>
      </div>

      {/* Use Cases Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Students */}
          <div className="relative group overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-rose-100 p-10 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300 flex flex-col items-start text-left">
            <div className="h-16 w-16 rounded-2xl bg-linear-to-br from-rose-400 to-rose-600 flex items-center justify-center mb-8">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Students</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Stop skimming 50-page syllabus documents and dense textbook
              chapters right before finals. Instantly generate comprehensive
              study guides and bulleted notes from any PDF to cram smarter.
            </p>
            <ul className="space-y-3 mt-auto w-full">
              <li className="flex items-center text-gray-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-3"></span>
                Summarize heavy textbook chapters
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-3"></span>
                Export summaries to beautifully styled slides
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-3"></span>
                Digest syllabuses in seconds
              </li>
            </ul>
          </div>

          {/* Professionals */}
          <div className="relative group overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-rose-100 p-10 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300 flex flex-col items-start text-left">
            <div className="h-16 w-16 rounded-2xl bg-linear-to-br from-rose-400 to-rose-600 flex items-center justify-center mb-8">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Professionals
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Stay ahead in your industry without sacrificing your weekend.
              Catch up on lengthy corporate reports, legal documents, and
              contracts in minutes instead of hours.
            </p>
            <ul className="space-y-3 mt-auto w-full">
              <li className="flex items-center text-gray-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-3"></span>
                Read 100-page corporate reports instantly
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-3"></span>
                Extract key actionable insights and metrics
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-3"></span>
                Share high-level PDF briefs with your team
              </li>
            </ul>
          </div>

          {/* Researchers */}
          <div className="relative group overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-rose-100 p-10 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300 flex flex-col items-start text-left">
            <div className="h-16 w-16 rounded-2xl bg-linear-to-br from-rose-400 to-rose-600 flex items-center justify-center mb-8">
              <Microscope className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Researchers
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Analyze heavy academic papers and scientific journals with
              surgical precision. Extract their main findings, methodologies,
              and conclusions effortlessly.
            </p>
            <ul className="space-y-3 mt-auto w-full">
              <li className="flex items-center text-gray-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-3"></span>
                Analyze dense scientific journals
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-3"></span>
                Extract methodologies and core arguments
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-3"></span>
                Accelerate your literature reviews
              </li>
            </ul>
          </div>

          {/* Analysts */}
          <div className="relative group overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-rose-100 p-10 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300 flex flex-col items-start text-left">
            <div className="h-16 w-16 rounded-2xl bg-linear-to-br from-rose-400 to-rose-600 flex items-center justify-center mb-8">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Analysts</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Turn dense quarterly earning reports into searchable, structured
              data. Extract hard facts, financial strategies, and statistics to
              accelerate your analysis process.
            </p>
            <ul className="space-y-3 mt-auto w-full">
              <li className="flex items-center text-gray-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-3"></span>
                Extract strategies from earnings reports
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-3"></span>
                Structure messy financial documents
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-3"></span>
                Save hours of manual data extraction
              </li>
            </ul>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
