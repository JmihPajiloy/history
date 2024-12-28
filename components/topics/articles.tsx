import { ArticleCard, ArticleCardDescription, ArticleCardTitle } from "@/components/article-card";

export const Articles = () => {
  return (
    <>
      <h2 className="font-heading font-bold px-4 py-10 text-5xl scroll-mt-16" id="articles">Статьи</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        <ArticleCard>
          <ArticleCardTitle>Восстановление транспортной сети</ArticleCardTitle>
          <ArticleCardDescription>Текст текст текст текст</ArticleCardDescription>
        </ArticleCard>
        <ArticleCard>
          <ArticleCardTitle>Восстановление дорог, новый архитектурный план</ArticleCardTitle>
          <ArticleCardDescription>Текст текст текст текст</ArticleCardDescription>
        </ArticleCard>
        <ArticleCard>
          <ArticleCardTitle>Восстановление электроснабжения и коммуникаций</ArticleCardTitle>
          <ArticleCardDescription>Текст текст текст текст</ArticleCardDescription>
        </ArticleCard>
        <ArticleCard>
          <ArticleCardTitle>История Янтарной комнаты</ArticleCardTitle>
          <ArticleCardDescription>Текст текст текст текст</ArticleCardDescription>
        </ArticleCard>
        <ArticleCard href="/articles/rodent-and-disease-control" background="/photo1.jpeg">
          <ArticleCardTitle>Борьба с грызунами и болезнями</ArticleCardTitle>
          <ArticleCardDescription>После победы в Великой Отечественной войне Ленинград оказался в крайне тяжелой санитарно-эпидемиологической обстановке</ArticleCardDescription>
        </ArticleCard>
        <ArticleCard>
          <ArticleCardTitle>История Ленинградского зоопарка</ArticleCardTitle>
          <ArticleCardDescription>Текст текст текст текст</ArticleCardDescription>
        </ArticleCard>
      </div>
    </>
  );
};
