'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { FileText, Eye, EyeOff, Loader2, Mail, Lock } from 'lucide-react';
import { signInAction } from '@/actions/auth-actions';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SignInPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/dashboard';

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const result = await signInAction(formData);
    setLoading(false);

    if (result.success) {
      toast.success(result.message);
      router.push(redirectTo);
      router.refresh();
    } else {
      toast.error(result.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 relative overflow-hidden">
      {/* Background blobs */}
      <div className="fixed top-40 right-40 w-160 h-160 rounded-full bg-[radial-gradient(circle,rgba(225,29,72,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="fixed bottom-40 left-40 w-160 h-160 rounded-full bg-[radial-gradient(circle,rgba(15,23,42,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 p-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mb-6">
          <FileText className="w-7 h-7 text-rose-600" />
          <span className="font-extrabold text-lg text-gray-900">Sommaire</span>
        </Link>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-1">
          Welcome back
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Sign in to your account to continue
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="signin-email"
              className="text-sm font-semibold text-gray-700"
            >
              Email address
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
              <Input
                id="signin-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="pl-10 h-11 bg-gray-50 border-gray-200 rounded-xl focus-visible:ring-rose-500/30 focus-visible:border-rose-400"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="signin-password"
              className="text-sm font-semibold text-gray-700"
            >
              Password
            </label>
            <div className="relative flex items-center">
              <Lock className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
              <Input
                id="signin-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                placeholder="••••••••"
                className="pl-10 pr-11 h-11 bg-gray-50 border-gray-200 rounded-xl focus-visible:ring-rose-500/30 focus-visible:border-rose-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="absolute right-3 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <label className="flex items-center gap-2.5 cursor-pointer">
            <input
              id="signin-remember"
              name="rememberMe"
              type="checkbox"
              className="w-4 h-4 rounded accent-rose-600 cursor-pointer"
            />
            <span className="text-sm text-gray-600">
              Remember me for 7 days
            </span>
          </label>

          {/* Submit */}
          <Button
            id="signin-submit"
            type="submit"
            disabled={loading}
            className="mt-1 h-11 rounded-full bg-linear-to-r from-slate-900 to-rose-600 hover:from-rose-600 hover:to-slate-900 text-white font-bold text-base border-none transition-all duration-300 shadow-md"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Signing in…
              </>
            ) : (
              'Sign In'
            )}
          </Button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don&apos;t have an account?{' '}
          <Link
            href="/sign-up"
            className="text-rose-600 font-semibold hover:text-rose-700 transition-colors"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
