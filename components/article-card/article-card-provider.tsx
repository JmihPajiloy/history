"use client";
import { createContext, type PropsWithChildren, RefObject, useContext } from "react";
import { useHeight } from "@/hooks/use-height";


export type ArticleCardContextType = [RefObject<HTMLDivElement> | null, number]


const ArticleCardDescriptionContext = createContext<ArticleCardContextType>([null, 0]);
const ArticleCardButtonContext = createContext<ArticleCardContextType>([null, 0]);
const ArticleCardContext = createContext<ArticleCardContextType>([null, 0]);


export const ArticleCardProvider = ({ children }: PropsWithChildren) => {
  const [descriptionRef, descriptionHeight] = useHeight<HTMLDivElement>(48);
  const [buttonRef, buttonHeight] = useHeight<HTMLDivElement>(52);
  const [cardRef, cardHeight] = useHeight<HTMLDivElement>(384);

  return (
    <ArticleCardContext.Provider value={[cardRef, cardHeight]}>
      <ArticleCardDescriptionContext.Provider value={[descriptionRef, descriptionHeight]}>
        <ArticleCardButtonContext.Provider value={[buttonRef, buttonHeight]}>
          {children}
        </ArticleCardButtonContext.Provider>
      </ArticleCardDescriptionContext.Provider>
    </ArticleCardContext.Provider>
  );
};

export const useArticleCard = (): ArticleCardContextType => {
  const context = useContext(ArticleCardContext);
  if (context === undefined) {
    throw new Error(`${useArticleCard.name} must be used within an ArticleCardProvider`);
  }
  return context;
};

export const useArticleCardDescription = (): ArticleCardContextType => {
  const context = useContext(ArticleCardDescriptionContext);
  if (context === undefined) {
    throw new Error(`${useArticleCardDescription.name} must be used within an ArticleCardProvider`);
  }
  return context;
};

export const useArticleCardButton = (): ArticleCardContextType => {
  const context = useContext(ArticleCardButtonContext);
  if (context === undefined) {
    throw new Error(`${useArticleCardButton.name} must be used within an ArticleCardProvider`);
  }
  return context;
};