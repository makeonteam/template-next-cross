import "./layout.css";

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@hooks/common/ThemeProvider";
import { SafeAreaInitializer } from "@utils/SafeArea";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// you can change metadata for each page
export const metadata: Metadata = {
  title: "Next Cross",
  description: "Template of Cross-Platform app build with Web tech",
};
// this is for safe-area, edge-to-edge layout
export const viewport: Viewport = {
  viewportFit: "cover",
};

// root layout for the entire app
// children is the content
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh w-dvw overflow-hidden antialiased`}
      >
        <ThemeProvider>
          {children}
          <SafeAreaInitializer />
        </ThemeProvider>
      </body>
    </html>
  );
}
