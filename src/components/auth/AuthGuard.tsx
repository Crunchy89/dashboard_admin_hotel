"use client";

import { useAppSelector } from "@/store/hooks";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const PUBLIC_ROUTES = [
  "/",
  "/features",
  "/pricing",
  "/reviews",
  "/blog",
  "/faq",
  "/about",
  "/error-404",
];
const AUTH_ROUTES = ["/admin/signin", "/signin", "/signup"];

function isPublicRoute(pathname: string) {
  return PUBLIC_ROUTES.includes(pathname);
}

function isAuthRoute(pathname: string) {
  return AUTH_ROUTES.includes(pathname);
}

function isProtectedRoute(pathname: string) {
  return pathname === "/dashboard" || pathname.startsWith("/dashboard/");
}

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, hydrated } = useAppSelector((state) => state.auth);
  const publicRoute = isPublicRoute(pathname);
  const authRoute = isAuthRoute(pathname);
  const protectedRoute = isProtectedRoute(pathname);

  useEffect(() => {
    if (!hydrated) return;

    if (protectedRoute && !isAuthenticated) {
      router.replace("/admin/signin");
      return;
    }

    if (authRoute && isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [hydrated, isAuthenticated, authRoute, protectedRoute, router]);

  if (publicRoute) {
    return <>{children}</>;
  }

  if (!hydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-500 border-t-transparent" />
      </div>
    );
  }

  if (protectedRoute && !isAuthenticated) return null;
  if (authRoute && isAuthenticated) return null;

  return <>{children}</>;
}
