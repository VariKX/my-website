import React from "react";
import { Metadata } from "next";
import { Header } from "@/widgets/Header";
import { Oswald } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Сергей Можайский – Frontend Developer",
  description: "Frontend-разработчик, создаю быстрые и чистые интерфейсы с акцентом на архитектуру и UX.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${oswald.variable} font-sans`}>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <Header />
          <main>
            {children}
          </main>
        </ThemeProvider> 
      </body>
    </html>
  );
}
