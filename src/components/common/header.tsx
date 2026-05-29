import { FileText } from 'lucide-react';
import Link from 'next/link';
import { auth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import SignOutButton from './sign-out-button';

export default async function Header() {
  const { userId } = await auth();
  const isSignedIn = !!userId;

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="flex items-center justify-between py-4 px-8 mx-auto max-w-7xl w-full">
        {/* Left: Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 no-underline group">
            <FileText className="w-8 h-8 text-gray-900 group-hover:rotate-12 transform transition duration-200 ease-in-out" />
            <span className="font-extrabold text-xl text-gray-900 whitespace-nowrap">
              Sommaire
            </span>
          </Link>
        </div>

        {/* Right: Navigation & Auth Section */}
        <div className="flex items-center gap-8">
          {isSignedIn && (
            <Link
              href="/dashboard"
              className="no-underline text-gray-700 font-medium whitespace-nowrap hover:text-gray-900 transition-colors"
            >
              Your Summaries
            </Link>
          )}

          {!isSignedIn ? (
            <Link href="/sign-in">
              <Button
                variant="link"
                className="text-white rounded-full px-6 py-5 bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 hover:no-underline font-bold shadow-lg transition-all duration-300 cursor-pointer"
              >
                Sign In
              </Button>
            </Link>
          ) : (
            <SignOutButton />
          )}
        </div>
      </nav>
    </header>
  );
}
