import type { Metadata } from "next";

import { Lora, Spectral, Inter, JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import type { PropsWithChildren } from "react";
import { Providers } from "@/components/providers";


const inter = Inter({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-inter",
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
})

const lora = Lora({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-lora"
});

const spectral = Spectral({
  weight: ["200", "300", "400", "500", "600"],
  subsets: ["cyrillic", "latin"],
  variable: "--font-spectral"
});

export const metadata: Metadata = {
  title: "Ленинград после победы",
  description: "Проект по истории"
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
    <body
      className={cn(lora.variable, spectral.variable, inter.variable, mono.variable, "antialiased")}
    >
    <Providers>
      {children}
    </Providers>
    </body>
    </html>
  );
}
