"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

const FALLBACK_LANGUAGE = "en";
export const LANGUAGE_KEY = "language";
export const convertDetectedLanguage = (lang: string) => {
  const LANGUAGE_MAP: Record<string, string> = {
    "zh-HK": "zh-Hant",
    "zh-TW": "zh-Hant",
  };
  // apply map first
  if (LANGUAGE_MAP[lang]) return LANGUAGE_MAP[lang];
  // simplify language code: en-AU -> en
  return lang.split("-")[0];
};

interface LanguageProviderProps {
  children: React.ReactNode;
  languageKey?: string;
}

function LanguageProvider({ children, languageKey = LANGUAGE_KEY }: LanguageProviderProps) {
  const [language, setLanguageState] = useState(() => {
    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem(languageKey);
      if (storedLang && storedLang !== "system") {
        return storedLang;
      }

      const navigatorLanguage = navigator.language;
      if (navigatorLanguage) {
        return convertDetectedLanguage(navigatorLanguage);
      }
      return FALLBACK_LANGUAGE;
    }
    return FALLBACK_LANGUAGE;
  });
  const [messages, setMessages] = useState();

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
  };

  const NAMESPACES = ["main", "test"];

  useEffect(() => {
    const loadTranslations = async () => {
      // load all namespaces for the current locale (with fallback)
      const translations = await Promise.all(
        NAMESPACES.map(async (ns) => {
          try {
            // try to load the namespace for the current locale
            const mod = await import(`../../constants/locales/${language}/${ns}.json`);
            return { [ns]: mod.default };
          } catch {
            // fallback to the default locale if loading fails
            const mod = await import(`../../constants/locales/${FALLBACK_LANGUAGE}/${ns}.json`);
            return { [ns]: mod.default };
          }
        }),
      );
      // merge all namespace translations into a single object
      setMessages(Object.assign({}, ...translations));
    };

    loadTranslations();
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {messages ? (
        <NextIntlClientProvider locale={language} messages={messages}>
          {children}
        </NextIntlClientProvider>
      ) : null}
    </LanguageContext.Provider>
  );
}

export { LanguageProvider, useLanguage };
