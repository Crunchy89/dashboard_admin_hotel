"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export const LanguageToggleButton: React.FC = () => {
  const { locale, toggleLanguage, t } = useLanguage();
  const { resolvedTheme } = useTheme();

  const iconColor =
    resolvedTheme === "dark" ? "text-sky-300" : "text-brand-600";

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={
        locale === "en"
          ? t("common.switchToIndonesian")
          : t("common.switchToEnglish")
      }
      title={
        locale === "en"
          ? t("common.switchToIndonesian")
          : t("common.switchToEnglish")
      }
      className="relative flex h-11 min-w-11 items-center justify-center gap-1 rounded-full border border-gray-200 bg-white px-3 text-xs font-semibold text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 ${iconColor}`}
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M2 12H22"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
      <span>{locale === "en" ? "ID" : "EN"}</span>
    </button>
  );
};
