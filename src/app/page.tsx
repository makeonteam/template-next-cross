import Link from "next/link";

import { Button } from "@components/shadcn/ui/button";
import ThemeSwitcher from "@components/ThemeSwitcher";

// the page for children in layout
export default function Page() {
  return (
    <div className="mt-safe mb-safe min-h-svh w-full">
      <div className="flex flex-col items-center gap-2 p-2">
        <h1 className="text-xl font-bold">MakeOn</h1>
        <p className="text-md">
          Open Cards {"=>"} Notes, Boards, Snips, Tasks, Chats
        </p>
        <Button asChild>
          <Link href="/boards">Goto /boards</Link>
        </Button>
        <Button asChild>
          <Link href="/notes">Goto /notes</Link>
        </Button>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
