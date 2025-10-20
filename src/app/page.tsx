"use client";
import { useEffect } from "react";
import Link from "next/link";

import { Button } from "@components/shadcn/ui/button";
import ThemeSwitcher from "@components/common/ThemeSwitcher";
import LanguageSwitcher from "@components/common/LanguageSwitcher";

// the root-page for children in layout
export default function Page(): React.ReactElement {
  useEffect(() => {
    document.title = "Next Cross";
  }, []);

  return (
    <div className="mt-safe mb-safe min-h-full w-full">
      <div className="flex flex-col items-center gap-2 p-2">
        <h1 className="text-xl font-bold">Welcome to Next Cross</h1>
        <p className="text-md">Build desktop & mobile apps with web tech</p>
        <Button asChild>
          <Link href="/boards">Goto Main app {"=>"} /boards</Link>
        </Button>
        <Button asChild>
          <Link href="/home">Goto Home page {"=>"} /home</Link>
        </Button>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
}
