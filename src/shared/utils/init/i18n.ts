export const FALLBACK_LANGUAGE = "en";
export const NAMESPACES = ["main", "home", "test"];

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
