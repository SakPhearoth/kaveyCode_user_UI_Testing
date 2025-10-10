import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const pathname = req.nextUrl.pathname;

    // Redirect OAuth users who need registration
    if (token?.requireRegistration && pathname !== "/signup") {
      return NextResponse.redirect(new URL("/signup", req.url));
    }

    // Redirect from signup if already registered
    if (pathname === "/signup" && !token?.requireRegistration) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const pathname = req.nextUrl.pathname;

        // Always allow auth API routes
        if (pathname.startsWith("/api/auth")) return true;

        // Allow public routes
        const publicRoutes = ["/", "/signup"];
        if (publicRoutes.includes(pathname)) return true;

        // For protected routes, require token
        return !!token && token.error !== "RefreshAccessTokenError";
      },
    },
  }
);
