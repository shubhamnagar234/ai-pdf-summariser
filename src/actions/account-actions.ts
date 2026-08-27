"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { verifySession, hashPassword, verifyPassword } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function updateProfileAction(formData: FormData) {
  const session = await verifySession();
  if (!session.isAuth || !session.userId) {
    return { success: false, message: "Unauthorized" };
  }

  const fullName = formData.get("fullName") as string;
  if (!fullName || fullName.trim() === "") {
    return { success: false, message: "Name cannot be empty" };
  }

  try {
    await db
      .update(users)
      .set({ fullName: fullName.trim() })
      .where(eq(users.id, session.userId));

    revalidatePath("/account");
    return { success: true, message: "Profile updated successfully" };
  } catch (error) {
    console.error("Error updating profile:", error);
    return { success: false, message: "Failed to update profile" };
  }
}

export async function updatePasswordAction(formData: FormData) {
  const session = await verifySession();
  if (!session.isAuth || !session.userId) {
    return { success: false, message: "Unauthorized" };
  }

  const currentPassword = formData.get("currentPassword") as string;
  const newPassword = formData.get("newPassword") as string;

  if (!currentPassword || !newPassword) {
    return { success: false, message: "Both passwords are required" };
  }

  try {
    const userResult = await db
      .select()
      .from(users)
      .where(eq(users.id, session.userId));
    const user = userResult[0];

    if (!user || !user.passwordHash) {
      return { success: false, message: "User not found or invalid account" };
    }

    const isMatch = await verifyPassword(currentPassword, user.passwordHash);
    if (!isMatch) {
      return { success: false, message: "Incorrect current password" };
    }

    const newPasswordHash = await hashPassword(newPassword);

    await db
      .update(users)
      .set({ passwordHash: newPasswordHash })
      .where(eq(users.id, session.userId));

    return { success: true, message: "Password updated successfully" };
  } catch (error) {
    console.error("Error updating password:", error);
    return { success: false, message: "Failed to update password" };
  }
}
