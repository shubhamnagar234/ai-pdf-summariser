"use client";

import { useState } from "react";
import { User, Mail, Lock, Loader2, Save } from "lucide-react";
import { toast } from "sonner";
import {
  updateProfileAction,
  updatePasswordAction,
} from "@/actions/account-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MotionDiv } from "@/components/common/motion-wrapper";

export function AccountForms({
  user,
}: {
  user: { fullName: string | null; email: string };
}) {
  const [profileLoading, setProfileLoading] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);

  async function handleProfileSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setProfileLoading(true);
    const formData = new FormData(e.currentTarget);
    const result = await updateProfileAction(formData);
    setProfileLoading(false);

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  }

  async function handlePasswordSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPasswordLoading(true);
    const formData = new FormData(e.currentTarget);
    const result = await updatePasswordAction(formData);
    setPasswordLoading(false);

    if (result.success) {
      toast.success(result.message);
      (e.target as HTMLFormElement).reset();
    } else {
      toast.error(result.message);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
      {/* Profile Section */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl shadow-rose-500/5 border border-rose-100 p-6 sm:p-8 relative overflow-hidden h-fit"
      >
        <div className="absolute top-0 right-0 p-32 bg-rose-400/10 blur-[80px] rounded-full -mr-16 -mt-16 pointer-events-none" />

        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <User className="w-5 h-5 text-rose-500" />
          Profile Information
        </h2>

        <form
          onSubmit={handleProfileSubmit}
          className="flex flex-col gap-5 relative z-10"
        >
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-700"
            >
              Email Address
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
              <Input
                id="email"
                type="email"
                value={user.email}
                disabled
                className="pl-10 h-11 bg-gray-50/50 border-gray-200 rounded-xl text-gray-500"
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Your email cannot be changed.
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="fullName"
              className="text-sm font-semibold text-gray-700"
            >
              Full Name
            </label>
            <div className="relative flex items-center">
              <User className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
              <Input
                id="fullName"
                name="fullName"
                type="text"
                defaultValue={user.fullName || ""}
                required
                className="pl-10 h-11 bg-white/50 border-gray-200 rounded-xl focus-visible:bg-white focus-visible:ring-rose-500/30 focus-visible:border-rose-400 transition-all"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={profileLoading}
            className="mt-2 h-11 rounded-full bg-linear-to-r from-rose-500 to-rose-700 hover:scale-[1.02] text-white font-bold text-sm border-none transition-all duration-300 shadow-md shadow-rose-500/20"
          >
            {profileLoading ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Save className="w-4 h-4 mr-2" />
            )}
            Save Profile
          </Button>
        </form>
      </MotionDiv>

      {/* Security Section */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl shadow-rose-500/5 border border-rose-100 p-6 sm:p-8 relative overflow-hidden h-fit"
      >
        <div className="absolute top-0 left-0 p-32 bg-orange-400/5 blur-[80px] rounded-full -ml-16 -mt-16 pointer-events-none" />

        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Lock className="w-5 h-5 text-rose-500" />
          Security
        </h2>

        <form
          onSubmit={handlePasswordSubmit}
          className="flex flex-col gap-5 relative z-10"
        >
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="currentPassword"
              className="text-sm font-semibold text-gray-700"
            >
              Current Password
            </label>
            <div className="relative flex items-center">
              <Lock className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
              <Input
                id="currentPassword"
                name="currentPassword"
                type="password"
                required
                placeholder="••••••••"
                className="pl-10 h-11 bg-white/50 border-gray-200 rounded-xl focus-visible:bg-white focus-visible:ring-rose-500/30 focus-visible:border-rose-400 transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="newPassword"
              className="text-sm font-semibold text-gray-700"
            >
              New Password
            </label>
            <div className="relative flex items-center">
              <Lock className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
              <Input
                id="newPassword"
                name="newPassword"
                type="password"
                required
                placeholder="••••••••"
                minLength={8}
                className="pl-10 h-11 bg-white/50 border-gray-200 rounded-xl focus-visible:bg-white focus-visible:ring-rose-500/30 focus-visible:border-rose-400 transition-all"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={passwordLoading}
            className="mt-2 h-11 rounded-full bg-linear-to-r from-gray-800 to-gray-950 hover:scale-[1.02] text-white font-bold text-sm border-none transition-all duration-300 shadow-md shadow-gray-500/20"
          >
            {passwordLoading ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Lock className="w-4 h-4 mr-2" />
            )}
            Update Password
          </Button>
        </form>
      </MotionDiv>
    </div>
  );
}
