import { FileText } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function EmptySummaryState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 bg-white/60 backdrop-blur-sm border border-rose-100 rounded-3xl shadow-xl shadow-rose-500/5 text-center mt-4 transition-all duration-300 hover:shadow-rose-500/10">
      <div className="h-20 w-20 rounded-2xl bg-rose-50 flex items-center justify-center mb-6">
        <FileText className="w-10 h-10 text-rose-500" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        No Summaries yet
      </h3>
      <p className="text-gray-500 text-lg max-w-md mb-8">
        Upload your first PDF to get started with AI-powered summaries.
      </p>
      <Button
        asChild
        className="h-12 bg-linear-to-r from-rose-500 to-rose-700 hover:scale-[1.02] text-white font-bold rounded-full px-8 border-none transition-all duration-300 shadow-lg shadow-rose-500/30"
      >
        <Link href={"/upload"}>Create Your First Summary</Link>
      </Button>
    </div>
  );
}
