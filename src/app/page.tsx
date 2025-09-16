import ThemeSwitcher from "@/shared/components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      <h1 className="text-xl font-bold text-foreground">MakeOn</h1>
      <p className="text-md text-foreground">
        Open Cards {"=>"} Notes, Boards, Snips, Tasks, Chats
      </p>
      <ThemeSwitcher />
    </div>
  );
}
