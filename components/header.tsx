import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export const Header = () => {

  return (
    <header className="w-full h-16 flex justify-center items-center sticky top-0 bg-background z-30 shadow">
      <nav className="gap-2">
        <Button variant="link" asChild>
          <Link href="/#quizes">
            Квизы
          </Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="/#articles">
            Статьи
          </Link>
        </Button>
      </nav>
    </header>
  );
};