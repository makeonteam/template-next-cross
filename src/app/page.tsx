import Link from "next/link";
import { Button } from "@components/shadcn/ui/button";
import ThemeSwitcher from "@components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="flex h-full w-full overflow-hidden">
      <div className="flex flex-col gap-2 p-2">
        <h1 className="text-xl font-bold">MakeOn</h1>
        <p className="text-md">
          Open Cards {"=>"} Notes, Boards, Snips, Tasks, Chats
        </p>
        <Button asChild>
          <Link href="/boards">Goto boards</Link>
        </Button>
        <Button asChild>
          <Link href="/notes">Goto notes</Link>
        </Button>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
