import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./layout.css";

import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MakeOn",
  description: "Open Cards => Notes, Boards, Snips, Tasks, Chats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh w-dvw`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
