"use client";

import type React from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type ThemeMode = "light" | "dark" | "auto";
export type ResolvedTheme = "light" | "dark";

type ThemeContextType = {
  themeMode: ThemeMode;
  resolvedTheme: ResolvedTheme;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "themeMode";

function getAutoTheme(): ResolvedTheme {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18 ? "light" : "dark";
}

function resolveTheme(mode: ThemeMode): ResolvedTheme {
  if (mode === "auto") return getAutoTheme();
  return mode;
}

function readStoredThemeMode(): ThemeMode {
  if (typeof window === "undefined") return "light";

  const savedMode = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
  if (savedMode === "light" || savedMode === "dark" || savedMode === "auto") {
    return savedMode;
  }

  const legacyTheme = localStorage.getItem("theme") as ResolvedTheme | null;
  if (legacyTheme === "light" || legacyTheme === "dark") {
    return legacyTheme;
  }

  return "light";
}

function applyResolvedTheme(resolved: ResolvedTheme) {
  if (resolved === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeMode, setThemeModeState] = useState<ThemeMode>("light");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initialMode = readStoredThemeMode();
    setThemeModeState(initialMode);
    setResolvedTheme(resolveTheme(initialMode));
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    const resolved = resolveTheme(themeMode);
    setResolvedTheme(resolved);
    localStorage.setItem(STORAGE_KEY, themeMode);
    applyResolvedTheme(resolved);
  }, [themeMode, isInitialized]);

  useEffect(() => {
    if (!isInitialized || themeMode !== "auto") return;

    const syncAutoTheme = () => {
      const resolved = getAutoTheme();
      setResolvedTheme(resolved);
      applyResolvedTheme(resolved);
    };

    syncAutoTheme();
    const intervalId = window.setInterval(syncAutoTheme, 60_000);
    return () => window.clearInterval(intervalId);
  }, [themeMode, isInitialized]);

  const setThemeMode = useCallback((mode: ThemeMode) => {
    setThemeModeState(mode);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeModeState((prev) => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "auto";
      return "light";
    });
  }, []);

  const value = useMemo(
    () => ({
      themeMode,
      resolvedTheme,
      setThemeMode,
      toggleTheme,
    }),
    [themeMode, resolvedTheme, setThemeMode, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
