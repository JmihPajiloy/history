import type { Metadata } from "next";

import { Lora, Spectral } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import type { PropsWithChildren } from "react";
import { Providers } from "@/components/providers";


// const inter = Inter({
//   subsets: ["latin", "cyrillic", "cyrillic-ext"],
//   display: "swap"
// });

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
  title: "Ленинград, После войны",
  description: "Проект по истории"

};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
    <body
      className={cn(lora.variable, spectral.variable, "antialiased")}
    >
    <Providers>
      {children}
    </Providers>
    </body>
    </html>
  );
}
