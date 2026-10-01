import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({
    message: "Login successful",
  });

  response.cookies.set("auth-token", "TestToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  return response;
}