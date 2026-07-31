"use client";

import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import {
  clearCredentials,
  setCredentials,
  setHydrated,
} from "./authSlice";
import { makeStore, type AppStore } from "./store";
import {
  AUTH_COOKIE,
  clearAuthCookie,
  clearAuthUser,
  loadAuthUser,
} from "@/lib/auth";

function hasAuthCookie() {
  return document.cookie
    .split("; ")
    .some((row) => row.startsWith(`${AUTH_COOKIE}=`));
}

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  useEffect(() => {
    const store = storeRef.current;
    if (!store) return;

    const user = loadAuthUser();
    const cookiePresent = hasAuthCookie();

    if (user && cookiePresent) {
      store.dispatch(setCredentials(user));
    } else {
      clearAuthCookie();
      clearAuthUser();
      store.dispatch(clearCredentials());
    }

    store.dispatch(setHydrated(true));
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
