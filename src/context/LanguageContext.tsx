"use client";

import type React from "react";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { translate, type Locale } from "@/i18n/translations";

type LanguageContextType = {
  locale: Locale;
  t: (key: string) => string;
  toggleLanguage: () => void;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale | null;
    if (savedLocale === "en" || savedLocale === "id") {
      setLocaleState(savedLocale);
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
  }, [locale, isInitialized]);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLocaleState((prev) => (prev === "en" ? "id" : "en"));
  }, []);

  const t = useCallback(
    (key: string) => translate(locale, key),
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLanguage, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
