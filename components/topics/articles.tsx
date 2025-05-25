"use client";

import {
  ArticleCard,
  ArticleCardButton,
  ArticleCardDescription,
  ArticleCardFallback,
  ArticleCardProvider,
  ArticleCardTitle
} from "@/components/article-card";
import { useFetchAllArticles } from "@/hooks";
import { Button } from "@/components/ui/button";

export const Articles = () => {
  const { isLoading, data, isSuccess } = useFetchAllArticles();

  return (
    <>
      <h2
        className="font-heading font-extrabold pt-4 pb-8 text-2xl md:text-3xl lg:text-4xl text-center scroll-mt-16"
        id="articles"
      >
        Статьи
      </h2>
      <div className="text-center mb-4">
        <Button asChild>
          <a href="mailto:vision.x2006@gmail.com?subject=Опубликовать%20статью">
            Хотите опубликовать статью?
          </a>
        </Button>
      </div>
      <div className="flex flex-wrap gap-4 justify-center mx-auto w-full max-w-[49rem]">
        {isLoading && (
          <>
            <ArticleCardFallback />
            <ArticleCardFallback />
            <ArticleCardFallback />
            <ArticleCardFallback />
            <ArticleCardFallback />
            <ArticleCardFallback />
            <ArticleCardFallback />
            <ArticleCardFallback />
            <ArticleCardFallback />
          </>
        )}
        {isSuccess &&
          data.map((item, index) => (
            <ArticleCardProvider key={index}>
              <ArticleCard
                background={item.photo_url ?? "/article-preview-fallback.png"}
              >
                <ArticleCardTitle>{item.title}</ArticleCardTitle>
                <ArticleCardDescription>
                  {item.description}
                </ArticleCardDescription>
                <ArticleCardButton href={`/articles/${item.id}`}>
                  Читать
                </ArticleCardButton>
              </ArticleCard>
            </ArticleCardProvider>
          ))}
      </div>
    </>
  );
};
