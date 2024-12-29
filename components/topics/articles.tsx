import {
  ArticleCard,
  ArticleCardButton,
  ArticleCardDescription,
  ArticleCardProvider,
  ArticleCardTitle
} from "@/components/article-card";
// import dynamic from "next/dynamic";

const articles = [
  {
    title: "Восстановление транспортной сети",
    description: "Текст текст текст текст",
    href: "/articles/restoration-of-the-transport-network",
    background: "/img.png"
  },
  {
    title: "Восстановление дорог, новый архитектурный план",
    description: "Текст текст текст текст",
    href: "/404",
    background: "/img.png"
  },
  {
    title: "Восстановление электроснабжения и коммуникаций",
    description: "Текст текст текст текст",
    href: "/articles/restoration-of-power-supply-and-communications",
    background: "/img.png"
  },
  {
    title: "История Янтарной комнаты",
    description: "Текст текст текст текст",
    href: "/404",
    background: "/img.png"
  },
  {
    title: "Борьба с грызунами и болезнями",
    description: "После победы в Великой Отечественной войне Ленинград оказался в крайне тяжелой санитарно-эпидемиологической обстановке",
    href: "/articles/restoration-of-the-transport-network",
    background: "/photo1.jpeg"
  },
  {
    title: "История Ленинградского зоопарка",
    description: "Текст текст текст текст",
    href: "/404",
    background: "/img.png"
  },
  {
    title: "История коллекции семян в ВИР Вавилова",
    description: "Текст текст текст текст",
    href: "/404",
    background: "/img.png"
  },
  {
    title: "Восстановление промышленных предприятий",
    description: "Текст текст текст текст",
    href: "/404",
    background: "/img.png"
  },
  {
    title: "Развитие метро не как в Москве",
    description: "Текст текст текст текст",
    href: "/404",
    background: "/img.png"
  },
  {
    title: "Восстановление пищевой промышленности (карточки были до 47 года)",
    description: "Текст текст текст текст",
    href: "/404",
    background: "/img.png"
  },
  {
    title: "Строительство малометражек с отоплением вместо общежитий и бараков",
    description: "Текст текст текст текст",
    href: "/404",
    background: "/img.png"
  },
  {
    title: "Детский вопрос (лечение, образование, обучение и развлечения)",
    description: "Текст текст текст текст",
    href: "/404",
    background: "/img.png"
  }
];

// const ArticleCard = dynamic(() => import("@/components/article-card").then(({ ArticleCard }) => ArticleCard), {
//   ssr: false,
//   loading: () => <ArticleCardFallback />
// });


export const Articles = () => {
  return (
    <>
      <h2 className="font-heading font-bold px-4 py-10 text-5xl scroll-mt-16"
          id="articles">Статьи</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {
          articles.map(({ title, description, href, ...rest }, index) => (
            <ArticleCardProvider key={index}>
              <ArticleCard {...rest}>
                <ArticleCardTitle>{title}</ArticleCardTitle>
                <ArticleCardDescription>{description}</ArticleCardDescription>
                <ArticleCardButton href={href}>Читать</ArticleCardButton>
              </ArticleCard>
            </ArticleCardProvider>
          ))
        }
      </div>
    </>
  );
};
