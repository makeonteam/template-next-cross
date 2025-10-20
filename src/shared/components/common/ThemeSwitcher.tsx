"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

type Theme = "system" | "light" | "dark";

function ThemeSwitcher(): React.ReactElement {
  const tMain = useTranslations("main");
  const { theme, setTheme } = useTheme();
  const storedTheme = localStorage.getItem("theme") || "system";
  const [themeActived, setThemeActived] = useState(storedTheme);

  const handleChangeTheme = (value: Theme) => {
    setTheme(value);
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    if (theme) {
      setThemeActived(theme);
    }
  }, [theme]);

  return (
    <div className="flex flex-1 flex-col gap-2 p-4">
      <p className="text-sm font-medium">{tMain("common.settings.theme")}</p>
      <div className="flex gap-2 text-sm">
        {["system", "light", "dark"].map((value) => (
          <label key={value} className="flex items-center gap-2">
            <input
              type="radio"
              name="theme"
              value={value}
              checked={themeActived === value}
              onChange={() => handleChangeTheme(value as Theme)}
              className="text-blue-600 focus:ring-blue-500"
            />
            <span className="capitalize">{tMain(`common.settings.${value}`)}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default ThemeSwitcher;
