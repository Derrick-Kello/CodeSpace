import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// import { getToken } from 'next-auth/jwt'; // Not using next-auth for now
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// Initialize Firebase (must be outside middleware function for cold starts)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const authInstance = getAuth(app);
const firestoreInstance = getFirestore(app);

async function getAuthUserRole(request: NextRequest): Promise<string | null> {
  // In a real app, you would verify a session cookie/token securely
  // For simplicity and immediate testing, we'll try to read auth state and then role.
  // This is a client-side approach being forced into middleware, use with caution.

  const token = request.cookies.get('__session')?.value; // Assuming session cookie is set on login

  if (!token) {
    return null; // Not authenticated
  }

  // In a real scenario, you'd verify this token server-side.
  // For demonstration, we'll use a simplified mock or direct Firebase lookup (problematic in Edge)

  // This part is problematic in Edge runtime with client SDKs.
  // A proper server-side approach would be needed for production.
  try {
    // Simulate getting user from authenticated session (e.g., from a decoded JWT)
    // For now, let's manually map a mock user to an admin role for testing
    const uid = "test-admin-uid"; // REPLACE WITH ACTUAL UID OF AN ADMIN USER IN FIRESTORE
    const userDocRef = doc(firestoreInstance, "users", uid);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      return userDocSnap.data().role || null;
    }
  } catch (error) {
    console.error("Error fetching user role in middleware:", error);
    return null;
  }

  return null;
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // A simplified isAuthenticated check. In production, use proper session validation.
  const isAuthenticated = request.cookies.has('__session');

  if (pathname.startsWith('/admin')) {
    // For admin routes, we need a proper role check
    const userRole = await getAuthUserRole(request);

    if (!isAuthenticated) {
      console.log("Middleware: Not authenticated, redirecting to auth");
      return NextResponse.redirect(new URL('/auth', request.url));
    }

    if (userRole !== 'admin') {
      console.log("Middleware: Authenticated but not admin, redirecting to home");
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
