import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET;
const key = new TextEncoder().encode(JWT_SECRET);

export default async function middleware(req: NextRequest) {
  const protectedRoutes = ['/dashboard', '/summaries', '/upload'];
  const currentPath = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some((route) =>
    currentPath.startsWith(route),
  );

  if (isProtectedRoute) {
    const sessionCookie = req.cookies.get('session')?.value;

    if (!sessionCookie) {
      return NextResponse.redirect(new URL('/sign-in', req.url));
    }

    try {
      await jwtVerify(sessionCookie, key, { algorithms: ['HS256'] });
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL('/sign-in', req.url));
    }
  }

  if (
    currentPath.startsWith('/sign-in') ||
    currentPath.startsWith('/sign-up')
  ) {
    const sessionCookie = req.cookies.get('session')?.value;
    if (sessionCookie) {
      try {
        await jwtVerify(sessionCookie, key, { algorithms: ['HS256'] });
        return NextResponse.redirect(new URL('/dashboard', req.url));
      } catch (error) {
        // Invalid session, let them proceed to sign in
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
