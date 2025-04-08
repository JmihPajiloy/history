"use client";

import React, { type PropsWithChildren } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";
import { usePathname } from "next/navigation";

const LinkButton = ({
  href,
  children
}: PropsWithChildren<{ href: string }>) => {
  const pathname = usePathname();
  return (
    <Button
      variant="link"
      className="text-lg font-bold tracking-wide hover:text-primary-foreground transition-colors"
      onClick={(event) => {
        if (pathname !== "/") {
          return;
        }
        event.preventDefault();

        if (!href.match(/\/#([A-Za-z0-9]+)/g)) {
          toast("Что-то пошло не так :(", {
            description: `Похоже, что ссылка ${href} не хэшовая`
          });
          return;
        }
        const id = href.slice(2);
        const heading = document.getElementById(id);
        if (!heading) {
          toast("Что-то пошло не так :(", {
            description: `Не удалось найти элемент с id #${id}`
          });
          return;
        }
        heading.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export const Header = () => {
  return (
    <header
      className="w-full h-20 flex justify-center items-center sticky shadow top-0 z-30 relative px-4"
      style={{
        backgroundImage: "url('/header.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <nav className="flex gap-4 relative z-10">
        <LinkButton href="/#articles">Статьи</LinkButton>
        <LinkButton href="/#quizes">Квизы</LinkButton>
      </nav>
    </header>
  );
};
