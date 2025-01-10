import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  
  // Define public and protected paths
  const isPublicPath = path === "/login" || path === "/register";
  const isProtectedPath = path === "/" || path === "/home" || path.startsWith("/dashboard") || path.startsWith("/profile");
  const token = req.cookies.get("token")?.value || "";

  // If accessing protected path without token, redirect to login
  if (isProtectedPath && !token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // If token exists, verify it
  if (token) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      await jwtVerify(token, secret);
      
      // If on public path with valid token, redirect to home
      if (isPublicPath) {
        return NextResponse.redirect(new URL("/home", req.nextUrl));
      }
      
      // If token is valid and on protected path, allow request
      return NextResponse.next();
    } catch (error) {
      // If token is invalid, clear it and redirect to login
      const response = NextResponse.redirect(new URL("/login", req.nextUrl));
      response.cookies.delete("token");
      return response;
    }
  }

  // Allow access to public paths without token
  if (isPublicPath) {
    return NextResponse.next();
  }

  // Default: redirect to login for any other paths without valid token
  return NextResponse.redirect(new URL("/login", req.nextUrl));
}

export const config = {
  matcher: [
    "/",
    "/home",
    "/login",
    "/register",
    // Add more protected routes here
    "/dashboard/:path*",
    "/profile/:path*"
  ]
};