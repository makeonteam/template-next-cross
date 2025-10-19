import { useTranslations } from "next-intl";
import { GlobeIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/shadcn/ui/dropdown-menu";
import { Button } from "@components/shadcn/ui/button";
import { useLocale } from "@/shared/hooks/common/LanguageProvider";

const languages = [
  { code: "en", label: "English" },
  { code: "zh-CN", label: "中文" },
  // add more languages here
];

export default function LanguageSwitcher() {
  const tMain = useTranslations();
  const { locale, setLocale } = useLocale();

  const handleChangeLanguage = (lang: string) => {
    setLocale(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon-sm">
          <GlobeIcon className="size-[18px]" />
          <span className="sr-only">{tMain("common.settings.toggle-language")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="flex flex-col gap-[1px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleChangeLanguage(lang.code)}
            className={lang.code === locale ? "bg-accent" : ""}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
