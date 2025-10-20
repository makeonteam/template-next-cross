import { useTranslations } from "next-intl";
import { GlobeIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/shadcn/ui/dropdown-menu";
import { Button } from "@components/shadcn/ui/button";
import { useLanguage, convertDetectedLanguage, LANGUAGE_KEY } from "@hooks/common/LanguageProvider";

const LANGUAGES = [
  { code: "system", label: "System" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "zh-Hant", label: "繁體中文" },
  // add more languages here
];

export default function LanguageSwitcher() {
  const tMain = useTranslations("main");
  const { setLanguage } = useLanguage();
  const storedLang = localStorage.getItem(LANGUAGE_KEY) || "system";

  const handleChangeLanguage = (lang: string) => {
    if (lang === "system") {
      setLanguage(convertDetectedLanguage(navigator.language));
    } else {
      setLanguage(lang);
    }
    localStorage.setItem(LANGUAGE_KEY, lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon-sm">
          <GlobeIcon className="size-[17px]" />
          <span className="sr-only">{tMain("common.settings.toggle-language")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="flex flex-col gap-[1px]">
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleChangeLanguage(lang.code)}
            className={lang.code === storedLang ? "bg-accent" : ""}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
