"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

type Theme = "system" | "light" | "dark";

function ThemeSwitcher(): React.ReactElement {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (value: Theme) => {
    setTheme(value);
  };

  const storedTheme = localStorage.getItem("theme") || "system";
  const [themeActived, setThemeActived] = useState(storedTheme);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    if (theme) {
      setThemeActived(theme);
    }
  }, [theme]);

  return (
    <div className="flex flex-1 flex-col gap-2 p-4">
      <div className="text-sm font-medium text-black dark:text-white">Theme</div>
      <div className="flex gap-2">
        {["system", "light", "dark"].map((value) => (
          <label key={value} className="flex cursor-pointer items-center gap-2 text-sm text-black dark:text-white">
            <input
              type="radio"
              name="theme"
              value={value}
              checked={themeActived === value}
              onChange={() => handleThemeChange(value as Theme)}
              className="text-blue-600 focus:ring-blue-500"
            />
            <span className="capitalize">{value}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default ThemeSwitcher;
