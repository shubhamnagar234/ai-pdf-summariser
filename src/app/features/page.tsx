import BgGradient from "@/components/common/bg-gradient";
import CTASection from "@/components/home/cta-section";
import { Zap, Sparkles, Download, Layers } from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="relative w-full min-h-screen">
      <BgGradient />

      {/* Header */}
      <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
          Everything you need to{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-500 to-rose-700">
            master Documents
          </span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Powerful AI features designed to help you consume complex PDFs 10x
          faster and never miss a key insight.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Large Span */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-rose-100 p-8 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap className="w-48 h-48 text-rose-500" />
            </div>
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-xl bg-linear-to-br from-rose-400 to-rose-600 flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Lightning-Fast Analysis
              </h3>
              <p className="text-gray-600 max-w-md text-lg leading-relaxed">
                Turn 100-page reports into 2-minute reads. Our advanced AI model
                processes PDFs in seconds, giving you the bottom line without
                the fluff.
              </p>
            </div>
          </div>

          {/* Card 2: Square */}
          <div className="relative group overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-rose-100 p-8 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300">
            <div className="h-12 w-12 rounded-xl bg-linear-to-br from-rose-400 to-rose-600 flex items-center justify-center mb-6">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Insight Extraction
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Automatically extract the most important actionable points,
              quotes, and core arguments from any document.
            </p>
          </div>

          {/* Card 3: Square */}
          <div className="relative group overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-rose-100 p-8 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300">
            <div className="h-12 w-12 rounded-xl bg-linear-to-br from-rose-400 to-rose-600 flex items-center justify-center mb-6">
              <Download className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Styled Exports
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Download your summaries as beautifully styled, multi-page slide
              decks perfect for sharing or studying.
            </p>
          </div>

          {/* Card 4: Wide Span */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-rose-100 p-8 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300">
            <div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity translate-y-8">
              <Layers className="w-48 h-48 text-rose-500" />
            </div>
            <div className="relative z-10 flex flex-col justify-center h-full">
              <div className="h-12 w-12 rounded-xl bg-linear-to-br from-rose-400 to-rose-600 flex items-center justify-center mb-6">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Multi-Page Support
              </h3>
              <p className="text-gray-600 max-w-md text-lg leading-relaxed">
                Whether it's a 2-page brief or a 200-page textbook chapter, our
                engine scales to handle massive documents with ease.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
