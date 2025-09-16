"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => setMounted(true), []);

  const current = mounted
    ? theme === "system"
      ? "system"
      : (theme ?? "system")
    : "system";
  const currentLabel = mounted
    ? theme === "system"
      ? `System (${resolvedTheme === "dark" ? "Dark" : "Light"})`
      : theme === "dark"
        ? "Dark"
        : "Light"
    : "Loading";

  return (
    <div className="flex items-center gap-2">
      <span>
        Current theme {"=>"} {currentLabel}
      </span>
      <select
        className="bg-transparent border outline-none rounded-2xl"
        aria-label="Select theme"
        value={current}
        onChange={(event) => setTheme(event.target.value)}
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}
