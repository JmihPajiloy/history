import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Страница не найдена"
}

const NotFound = () => {
  return (
    <main className="flex items-center h-screen justify-center flex-col">
      <h1 className="font-semibold font-mono text-8xl py-8">#404 :(</h1>
      <p className="font-medium">Страница не найдена</p>
      <Button asChild className="mt-4 ">
        <Link href="/">
          На главную
        </Link>
      </Button>
    </main>
  );
};

export default NotFound;