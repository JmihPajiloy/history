"use client";

import {
  ArticleCard,
  ArticleCardButton,
  ArticleCardDescription, ArticleCardFallback,
  ArticleCardProvider,
  ArticleCardTitle
} from "@/components/article-card";
import { useFetchAllArticles } from "@/hooks";

export const Articles = () => {
  const { isLoading, data, isSuccess } = useFetchAllArticles();

  return (
    <>
      <h2 className="font-heading font-extrabold px-4 py-10 text-5xl mx-auto scroll-mt-16"
          id="articles">Статьи</h2>
      <div className="flex flex-wrap gap-4 justify-center mx-auto w-full max-w-[49rem]">
        {isLoading && <>
          <ArticleCardFallback />
          <ArticleCardFallback />
          <ArticleCardFallback />
          <ArticleCardFallback />
          <ArticleCardFallback />
          <ArticleCardFallback />
          <ArticleCardFallback />
          <ArticleCardFallback />
          <ArticleCardFallback />
        </>}
        {isSuccess && data.map((item, index) => (
          <ArticleCardProvider key={index}>
            <ArticleCard background={item.photo_url ?? "/article-preview-fallback.png"}>
              <ArticleCardTitle>{item.title}</ArticleCardTitle>
              <ArticleCardDescription>{item.description}</ArticleCardDescription>
              <ArticleCardButton href={`/articles/${item.id}`}>Читать</ArticleCardButton>
            </ArticleCard>
          </ArticleCardProvider>
        ))
        }
      </div>
    </>
  );
};
