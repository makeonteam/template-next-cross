"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [themeActived, setThemeActived] = useState("");
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    if (theme) {
      setThemeActived(theme);
    }
  }, [theme]);

  return (
    <div className="flex items-center gap-2">
      <span>Current theme {"=>"} </span>
      {themeActived && (
        <>
          <span>{themeActived}</span>
          <select
            className="bg-transparent border outline-none rounded-2xl"
            aria-label="Select theme"
            value={themeActived}
            onChange={(event) => setTheme(event.target.value)}
          >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </>
      )}
    </div>
  );
}
