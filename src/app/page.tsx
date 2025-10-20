"use client";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Button } from "@components/shadcn/ui/button";
import ThemeSwitcher from "@components/common/ThemeSwitcher";
import LanguageSwitcher from "@components/common/LanguageSwitcher";

// the root-page for children in layout
export default function Page(): React.ReactElement {
  const tTest = useTranslations("test");
  useEffect(() => {
    document.title = "Next Cross";
  }, []);

  return (
    <div className="mt-safe mb-safe min-h-full w-full">
      <div className="flex flex-col items-center gap-2 p-2">
        <h1 className="text-xl font-bold">{tTest("welcome")}</h1>
        <p className="text-md">{tTest("description")}</p>
        <Button asChild>
          <Link href="/boards">{tTest("goto_main_app")}</Link>
        </Button>
        <Button asChild>
          <Link href="/home">{tTest("goto_home_page")}</Link>
        </Button>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
}
