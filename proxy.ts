import { auth } from "@/auth";
import { NextResponse } from "next/server";

export const proxy = auth((request) => {
  const isLoggedIn = !!request.auth;

  if (isLoggedIn) {
    return NextResponse.next();
  }

  const pathname = request.nextUrl.pathname;

  // API requests should receive 401
  if (pathname.startsWith("/api/")) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  // Page requests should redirect to login
  return NextResponse.redirect(
    new URL("/login", request.url)
  );
});

export const config = {
  matcher: [
    "/students/:path*",
    "/api/students/:path*",
  ],
};