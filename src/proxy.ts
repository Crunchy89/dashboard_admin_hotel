import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_COOKIE } from "@/lib/auth-constants";

const AUTH_ROUTES = ["/", "/signin", "/signup"];

const PROTECTED_PREFIXES = [
  "/dashboard",
  "/user",
  "/staff",
  "/client-points",
  "/finance",
  "/salary",
  "/chat",
  "/calendar",
  "/maintenance",
  "/laporan",
  "/profile",
  "/alerts",
  "/avatars",
  "/badge",
  "/buttons",
  "/images",
  "/modals",
  "/videos",
  "/form-elements",
  "/basic-tables",
  "/line-chart",
  "/bar-chart",
  "/blank",
];

function isAuthRoute(pathname: string) {
  return AUTH_ROUTES.includes(pathname);
}

function isProtectedRoute(pathname: string) {
  return PROTECTED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(AUTH_COOKIE)?.value;
  const isLoggedIn = Boolean(token);

  if (isProtectedRoute(pathname) && !isLoggedIn) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
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
