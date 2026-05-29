'use client';

import { signOutAction } from '@/actions/auth-actions';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { toast } from 'sonner';

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOutAction();
      toast.success('Signed out successfully');
      router.push('/sign-in');
      router.refresh();
    } catch (error) {
      toast.error('Failed to sign out');
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
    >
      <LogOut className="w-4 h-4" />
      Sign Out
    </button>
  );
}
