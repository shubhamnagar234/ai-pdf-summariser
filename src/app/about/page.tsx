import BgGradient from "@/components/common/bg-gradient";
import CTASection from "@/components/home/cta-section";

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen">
      <BgGradient />

      {/* Header */}
      <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-500 to-rose-700">
            Mission
          </span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          We believe that knowledge should be fast, accessible, and easy to
          digest.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <div className="relative group overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-rose-100 p-10 md:p-16 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300 text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Problem with Documents
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            The world's most valuable information is trapped inside massive,
            dense PDFs. Whether it's a 200-page textbook, a quarterly corporate
            report, or an academic research paper, finding the actual "point" of
            the document often feels like looking for a needle in a haystack.
            <br />
            <br />
            We realized that students, professionals, and researchers were
            wasting hundreds of hours every year just skimming text to find what
            mattered.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Solution
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            AI PDF Summariser was built to cut through the noise. By leveraging
            cutting-edge Artificial Intelligence, we can process a 100-page
            report in seconds and hand you the exact bullet points, insights,
            and facts you actually care about.
            <br />
            <br />
            Our goal is to give you your time back, so you can focus on
            executing ideas instead of just reading them.
          </p>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
