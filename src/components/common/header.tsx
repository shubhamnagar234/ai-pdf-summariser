import { FileText } from 'lucide-react';
import NavLink from './nav-link';
import { auth } from '@/lib/auth';
import SignOutButton from './sign-out-button';

export default async function Header() {
  const { userId } = await auth();
  const isSignedIn = !!userId;

  return (
    <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto">
      <div className="flex lg:flex-1">
        <NavLink href="/" className="flex items-center gap-1 lg:gap shrink-0">
          <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out" />
          <span className="font-extrabold lg:text-xl text-gray-900">
            Sommaire
          </span>
        </NavLink>
      </div>

      <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
        <NavLink href="/#pricing">Pricing</NavLink>
        {isSignedIn && (
          <NavLink href="/dashboard">Your Summaries</NavLink>
        )}
      </div>

      <div className="flex lg:justify-end lg:flex-1">
        {isSignedIn ? (
          <div className="flex gap-4 items-center">
            <NavLink href="/upload">Upload a PDF</NavLink>
            <div className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-bold rounded-md">Pro</div>
            <SignOutButton />
          </div>
        ) : (
          <NavLink href="/sign-in">Sign In</NavLink>
        )}
      </div>
    </nav>
  );
}
