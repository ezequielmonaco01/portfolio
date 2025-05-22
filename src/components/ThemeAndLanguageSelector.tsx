import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";

const ThemeSelector = (): ReactNode => {
  const [isDark, setIsDark] = useState(false);

  return (
    <button
      className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center"
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 md:w-5 md:h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 md:w-5 md:h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
      )}
    </button>
  );
};

const LanguageSelector = (): ReactNode => {
  const { i18n } = useTranslation();

  const handleChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <button
      className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center font-medium text-sm md:text-base"
      onClick={() => handleChange(i18n.language === "es" ? "en" : "es")}
    >
      {i18n.language === "es" ? "ES" : "EN"}
    </button>
  );
};

export const ThemeAndLanguageSelector = () => {
  return (
    <div className="flex gap-2 fixed bottom-3 right-3 md:bottom-4 md:right-4 z-50">
      <ThemeSelector />
      <LanguageSelector />
    </div>
  );
};
