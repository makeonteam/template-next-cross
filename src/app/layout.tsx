import "./layout.css";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "MakeOn",
  description: "Open Cards => Notes, Boards, Snips, Tasks, Chats",
};
export const viewport: Viewport = {
  viewportFit: "cover",
};

// root layout for the entire app
// children is the content of each page
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh w-dvw overflow-hidden`}
      >
        <ThemeProvider>
          {children}
          <SafeAreaInitializer />
        </ThemeProvider>
      </body>
    </html>
  );
}
