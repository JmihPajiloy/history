"use client";
import type { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useArticleCardButton } from "@/components/article-card";

export const ArticleCardButton = ({ children, className = "", href = "/", ...props }: PropsWithChildren<{
  className?: string,
  href?: string
}>) => {
  const [buttonRef] = useArticleCardButton();
  return (
    <div className="pb-4" ref={buttonRef}>
      <Button
        className={cn("w-full", className)}
        variant="secondary"
        asChild
        {...props}
      >
        <Link href={href}>
          {children}
        </Link>
      </Button>
    </div>

  );
};