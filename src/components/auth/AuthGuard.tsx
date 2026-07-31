"use client";

import { useAppSelector } from "@/store/hooks";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const AUTH_ROUTES = ["/", "/signin", "/signup"];

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, hydrated } = useAppSelector((state) => state.auth);
  const isAuthRoute = AUTH_ROUTES.includes(pathname);

  useEffect(() => {
    if (!hydrated) return;

    if (!isAuthenticated && !isAuthRoute) {
      router.replace("/");
      return;
    }

    if (isAuthenticated && isAuthRoute) {
      router.replace("/dashboard");
    }
  }, [hydrated, isAuthenticated, isAuthRoute, router]);

  if (!hydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-500 border-t-transparent" />
      </div>
    );
  }

  if (!isAuthenticated && !isAuthRoute) return null;
  if (isAuthenticated && isAuthRoute) return null;

  return <>{children}</>;
}
