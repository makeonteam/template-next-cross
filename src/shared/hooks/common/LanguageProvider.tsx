"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";

const i18nConfig = {
  fallbackLocale: "en",
};

interface LanguageContextType {
  locale: string;
  setLocale: (locale: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function useLocale() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LanguageProvider");
  }
  return context;
}

interface LanguageProviderProps {
  children: React.ReactNode;
  localeKey?: string;
}

function LanguageProvider({ children, localeKey = "locale" }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState(() => {
    if (typeof window !== "undefined") {
      const storedLocale = localStorage.getItem(localeKey) || i18nConfig.fallbackLocale;
      return storedLocale;
    }
    return i18nConfig.fallbackLocale;
  });
  const [messages, setMessages] = useState();

  const setLocale = (newLocale: string) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem(localeKey, newLocale);
    }
  };

  useEffect(() => {
    // loading translations
    import(`@shared/constants/locales/${locale}/main.json`)
      .then((mod) => setMessages(mod.default))
      .catch(() =>
        import(`@shared/constants/locales/${i18nConfig.fallbackLocale}/main.json`).then((mod) =>
          setMessages(mod.default),
        ),
      );
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {messages ? (
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      ) : null}
    </LanguageContext.Provider>
  );
}

export { LanguageProvider, useLocale };
