"use client";

import BgGradient from "@/components/common/bg-gradient";
import CTASection from "@/components/home/cta-section";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="relative w-full min-h-screen">
      <BgGradient />

      {/* Header */}
      <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
          Get in{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-500 to-rose-700">
            Touch
          </span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Have a question, feature request, or just want to say hi? We'd love to
          hear from you.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Let's chat.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Whether you need help figuring out a feature, want to request a
              new integration, or are interested in our enterprise plans, our
              inbox is always open.
            </p>

            {/* <div className="flex items-center space-x-4 mb-6 text-gray-700">
              <div className="h-12 w-12 rounded-xl bg-rose-100 flex items-center justify-center shrink-0">
                <Mail className="h-6 w-6 text-rose-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Email Us</p>
                <p className="text-gray-600">support@aipdfsummariser.com</p>
              </div>
            </div> */}

            <div className="flex items-center space-x-4 text-gray-700">
              <div className="h-12 w-12 rounded-xl bg-rose-100 flex items-center justify-center shrink-0">
                <MessageSquare className="h-6 w-6 text-rose-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Support</p>
                <p className="text-gray-600">
                  Usually responds within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative group overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-rose-100 p-8 shadow-xl shadow-rose-500/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 rounded-xl bg-linear-to-r from-rose-500 to-rose-700 text-white font-semibold shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:scale-[1.02] transition-all"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
