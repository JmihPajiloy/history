import {
  ArticleCard,
  ArticleCardButton,
  ArticleCardDescription,
  ArticleCardProvider,
  ArticleCardTitle
} from "@/components/article-card";

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
    href: "/articles/the-amber-room",
    background: "/img.png"
  },
  {
    title: "Борьба с грызунами и болезнями",
    description: "После победы в Великой Отечественной войне Ленинград оказался в крайне тяжелой санитарно-эпидемиологической обстановке",
    href: "/articles/rodent-and-disease-control",
    background: "/photo1.jpeg"
  },
  {
    title: "История Ленинградского зоопарка",
    description: "Текст текст текст текст",
    href: "/articles/leningrad-zoo",
    background: "/img.png"
  },
  {
    title: "История коллекции семян в ВИР Вавилова",
    description: "Текст текст текст текст",
    href: "/articles/the-history-of-the-seed-collection",
    background: "/img.png"
  },
  {
    title: "Восстановление предприятий",
    description: "Текст текст текст текст",
    href: "/articles/restoration-of-enterprises",
    background: "/img.png"
  },
  {
    title: "Развитие метро не как в Москве",
    description: "Текст текст текст текст",
    href: "/articles/leningrad-metro",
    background: "/img.png"
  },
  {
    title: "Восстановление пищевой промышленности (карточки были до 47 года)",
    description: "Текст текст текст текст",
    href: "/articles/restoration-of-the-food-industry",
    background: "/img.png"
  },
  {
    title: "Строительство малометражек с отоплением вместо общежитий и бараков",
    description: "Текст текст текст текст",
    href: "/articles/construction-of-small-apartments",
    background: "/img.png"
  },
  {
    title: "Детский вопрос",
    description: "Текст текст текст текст",
    href: "/articles/the-issue-of-children",
    background: "/img.png"
  }
];


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
