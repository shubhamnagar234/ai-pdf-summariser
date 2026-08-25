import Link from "next/link";
import { FileText } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.89 5.5 5.5 0 0 0-.15-3.82s-1.18-.38-3.9 1.47a13.38 13.38 0 0 0-7 0C6.27 1.73 5.09 2.11 5.09 2.11a5.5 5.5 0 0 0-.15 3.82A5.5 5.5 0 0 0 3 9.5c0 5.22 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 no-underline group"
            >
              <FileText className="w-6 h-6 text-gray-900 group-hover:rotate-12 transform transition duration-200" />
              <span className="font-extrabold text-lg text-gray-900 whitespace-nowrap">
                AI PDF Summariser
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Transform long PDF documents into actionable insights in seconds
              with the power of AI.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-gray-900 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-gray-900 transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <GithubIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-gray-900 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <LinkedinIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8 md:pl-16">
            <div>
              <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
                Product
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Use Cases
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} AI PDF Summariser. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
