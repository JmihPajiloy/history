"use client";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { useArticleCardDescription } from "@/components/article-card";

export const ArticleCardDescription = ({ children, className, ...props }: PropsWithChildren<{
  className?: string
}>) => {
  const [ref] = useArticleCardDescription();
  return (
    <p
      ref={ref}
      className={cn("text-white pt-2 pb-4 text-ellipsis overflow-hidden", className)}
      {...props}
    >
      {children}
    </p>
  );
};
