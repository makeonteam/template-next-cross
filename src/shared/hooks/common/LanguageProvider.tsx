"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import { convertDetectedLanguage, LANGUAGE_KEY } from "@utils/init/i18n";
import { FALLBACK_LANGUAGE, NAMESPACES } from "@utils/init/i18n";

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

interface LanguageProviderProps {
  children: React.ReactNode;
  languageKey?: string;
}

function LanguageProvider({ children, languageKey = LANGUAGE_KEY }: LanguageProviderProps) {
  const [language, setLanguage] = useState(() => {
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
