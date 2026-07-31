import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_COOKIE } from "@/lib/auth-constants";

const AUTH_ROUTES = ["/admin/signin", "/signin", "/signup"];

function isAuthRoute(pathname: string) {
  return AUTH_ROUTES.includes(pathname);
}

function isProtectedRoute(pathname: string) {
  return pathname === "/dashboard" || pathname.startsWith("/dashboard/");
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(AUTH_COOKIE)?.value;
  const isLoggedIn = Boolean(token);

  if (isProtectedRoute(pathname) && !isLoggedIn) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/signin";
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  if (isAuthRoute(pathname) && isLoggedIn) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
