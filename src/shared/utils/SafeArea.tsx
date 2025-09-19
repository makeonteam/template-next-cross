"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { SafeArea } from "@capacitor-community/safe-area";

export function SafeAreaInitializer() {
  const { resolvedTheme } = useTheme();
  const reversedTheme = resolvedTheme === "light" ? "dark" : "light";

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

  return null; // This component doesn't render anything
}
