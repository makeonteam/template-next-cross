"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { SafeArea } from "@capacitor-community/safe-area";

export function SafeAreaInitializer() {
  const { resolvedTheme } = useTheme();
  const reversedTheme = resolvedTheme === "light" ? "dark" : "light";

  // if theme changes, then status bar changes
  useEffect(() => {
    SafeArea.enable({
      config: {
        customColorsForSystemBars: true,
        statusBarColor: "#00000000", // transparent
        statusBarContent: reversedTheme,
        navigationBarColor: "#00000000", // transparent
        // navigationBarContent: "light",
      },
    });
  }, [resolvedTheme]);

  return null; // this component doesn't render anything
}
