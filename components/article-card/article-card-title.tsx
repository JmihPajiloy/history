"use client";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { useArticleCard } from "@/components/article-card/article-card-provider";
import { useHeight } from "@/hooks/use-height";

export const ArticleCardTitle = ({ children, className, ...props }: PropsWithChildren<{ className?: string }>) => {
  const [, cardHeight] = useArticleCard();
  const [titleRef, titleHeight] = useHeight<HTMLDivElement>();
  return (
    <h2
      className={cn("text-2xl font-semibold text-white flex items-end pb-2", className)}
      style={{
        marginTop: cardHeight - titleHeight
      }}
      ref={titleRef}
      {...props}
    >
      {children}
    </h2>
  );
};