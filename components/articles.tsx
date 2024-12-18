import React from "react";
import { ArticleCard, ArticleCardDescription, ArticleCardTitle } from "@/components/article-card";

export const Articles = () => {
  return (
    <>
      <h2 className="font-heading font-bold py-10 text-5xl" id="articles">Статьи</h2>
      {/*{inView ? "true" : "false"}*/}
      <div className="flex flex-wrap gap-4 justify-center">
        <ArticleCard>
          <ArticleCardTitle>Восстановление транспортной сети</ArticleCardTitle>
          <ArticleCardDescription>внутри карта</ArticleCardDescription>
        </ArticleCard>
        <ArticleCard>
          <ArticleCardTitle>Восстановление дорог, новый архитектурный план</ArticleCardTitle>
          <ArticleCardDescription>внутри карта</ArticleCardDescription>
        </ArticleCard>
        <ArticleCard>
          <ArticleCardTitle>Восстановление электроснабжения и коммуникаций</ArticleCardTitle>
          <ArticleCardDescription>внутри карта</ArticleCardDescription>
        </ArticleCard>
        <ArticleCard>
          <ArticleCardTitle>История Янтарной комнаты</ArticleCardTitle>
          <ArticleCardDescription>внутри карта</ArticleCardDescription>
        </ArticleCard>
        <ArticleCard>
          <ArticleCardTitle>Борьба с грызунами и болезнями</ArticleCardTitle>
          <ArticleCardDescription>внутри карта</ArticleCardDescription>
        </ArticleCard>
        <ArticleCard>
          <ArticleCardTitle>История Ленинградского зоопарка</ArticleCardTitle>
          <ArticleCardDescription>внутри карта</ArticleCardDescription>
        </ArticleCard>
      </div>
    </>
  );
};
