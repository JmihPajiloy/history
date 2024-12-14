import { ArticleCardDescription, ArticleCardTitle } from "@/components/article-card";
import dynamic from "next/dynamic";

// TODO: Костыль убрать
const ArticleCard = dynamic(
  () => import("@/components/article-card").then(mod => mod.ArticleCard),
  { ssr: false }
)

export default function Page() {

  return (
    <main className="flex flex-col py-4 px-10 min-h-screen">
        <h1 className="font-extrabold text-center text-6xl py-48">
          Ленинград после победы
        </h1>
      <h2 className="font-bold py-10  text-5xl">Статьи</h2>
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
      <h2 className="font-bold py-10  text-5xl">Квизычи</h2>
      <div className="flex gap-4 w-full">
        Скоро будут
      </div>
    </main>
  );
}
