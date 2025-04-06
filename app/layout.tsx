import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { type PropsWithChildren } from "react";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import { Footer } from "@/components/footer";

const sans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
});

const mono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono"
});

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Ленинград. После победы",
  description: "Проект по истории"
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
    <body
      className={cn(sans.variable, mono.variable, inter.variable, "antialiased scroll-smooth flex flex-col min-h-screen bg-background")}
    >
    <Providers>
      <Header />
      {children}
      <Footer />
    </Providers>
    </body>
    </html>
  );
}
