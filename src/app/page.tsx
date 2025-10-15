import Link from "next/link";

import { Button } from "@components/shadcn/ui/button";
import ThemeSwitcher from "@components/ThemeSwitcher";

// the root-page for children in layout
export default function Page(): React.ReactElement {
  return (
    <div className="mt-safe mb-safe min-h-svh w-full">
      <div className="flex flex-col items-center gap-2 p-2">
        <h1 className="text-xl font-bold">Welcome to Next Cross</h1>
        <p className="text-md">Build desktop & mobile apps with web tech</p>
        <ThemeSwitcher />
        <Button asChild>
          <Link href="/boards">Goto Main app {"=>"} /boards</Link>
        </Button>
        <Button asChild>
          <Link href="/home">Goto Home page {"=>"} /home</Link>
        </Button>
      </div>
    </div>
  );
}
