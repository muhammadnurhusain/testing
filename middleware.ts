// middleware.ts
import { NextRequest, NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get("token")?.value;

//   const isProtectedRoute = req.nextUrl.pathname.startsWith("/dashboard");

//   if (isProtectedRoute && !token) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   return NextResponse.next();
// }

// tanpa pengecekan login
export function middleware(req: NextRequest) {
  return NextResponse.next();
}

// Tentukan routes yang kena middleware
export const config = {
  matcher: ["/dashboard/:path*"],
};
