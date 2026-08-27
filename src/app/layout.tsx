import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { Toaster } from "@/components/ui/sonner";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | AI PDF Summariser",
    default:
      "AI PDF Summariser - Transform Long Documents into Actionable Insights",
  },
  description:
    "Save time and effort with AI-Powered PDF Summarization. Get key takeaways, insights, and full summaries in seconds.",
  keywords: [
    "PDF summariser",
    "AI summarizer",
    "Document summary",
    "Productivity tool",
    "AI document analysis",
  ],
  authors: [{ name: "AI PDF Summariser Team" }],
  creator: "AI PDF Summariser",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ai-pdf-summariser.com",
    title:
      "AI PDF Summariser - Transform Long Documents into Actionable Insights",
    description:
      "Save time and effort with AI-Powered PDF Summarization. Get key takeaways in seconds.",
    siteName: "AI PDF Summariser",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI PDF Summariser",
    description: "Save time and effort with AI-Powered PDF Summarization.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} font-sans antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1"> {children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
