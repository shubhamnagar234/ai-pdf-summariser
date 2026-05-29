'use server';

import { db } from '@/db';
import { users } from '@/db/schema';
import { createSession, hashPassword, verifyPassword } from '@/lib/auth';
import { eq } from 'drizzle-orm';

export async function signUpAction(formData: FormData) {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const fullName = formData.get('fullName') as string;

    if (!email || !password) {
      return { success: false, message: 'Email and password are required' };
    }

    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email));

    if (existingUser.length > 0) {
      return { success: false, message: 'Email already exists' };
    }

    const passwordHash = await hashPassword(password);

    const [newUser] = await db
      .insert(users)
      .values({
        email,
        passwordHash,
        fullName,
      })
      .returning();

    await createSession(newUser.id, newUser.email);

    return { success: true, message: 'Account created successfully' };
  } catch (error) {
    console.error('Sign up error', error);
    return { success: false, message: 'An error occurred during sign up' };
  }
}

export async function signInAction(formData: FormData) {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
      return { success: false, message: 'Email and password are required' };
    }

    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, email));

    if (!user || !user.passwordHash) {
      return { success: false, message: 'Invalid credentials' };
    }

    const isPasswordValid = await verifyPassword(password, user.passwordHash);

    if (!isPasswordValid) {
      return { success: false, message: 'Invalid credentials' };
    }

    await createSession(user.id, user.email);

    return { success: true, message: 'Signed in successfully' };
  } catch (error) {
    console.error('Sign in error', error);
    return { success: false, message: 'An error occurred during sign in' };
  }
}
