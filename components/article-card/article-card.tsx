"use client";

import { type PropsWithChildren, useEffect } from "react";
import { animated, config, useReducedMotion, useSpring } from "@react-spring/web";
import { useArticleCard, useArticleCardButton, useArticleCardDescription } from "@/components/article-card";

type Props = {
  offset?: number,
  background?: string,
  dummyHeight?: number
}

export const ArticleCard = ({
                              children,
                              background = "/article-preview-fallback.png",
                              dummyHeight = 160
                            }: PropsWithChildren<Props>) => {
  const [cardRef] = useArticleCard();
  const [, buttonHeight] = useArticleCardButton();
  const [, descriptionHeight] = useArticleCardDescription();
  const offset = descriptionHeight + buttonHeight;

  const start = { y: -dummyHeight, backdropFilter: "brightness(60%)" };
  const end = { y: -(dummyHeight + offset), backdropFilter: "brightness(40%)" };

  const reducedMotion = useReducedMotion();
  const [props, api] = useSpring(() => ({
    immediate: reducedMotion,
    from: start,
    to: end,
    config: config.gentle
  }));

  useEffect(() => {
    // Fix initial animation state
    const timeout = setTimeout(() => api.set(start), 0);
    return () => clearTimeout(timeout);
  }, [api]);

  return (
    <article className="h-96 w-96 rounded-xl bg-cover bg-center overflow-hidden shadow"
             ref={cardRef}
             onMouseEnter={() => api.start({ to: end })}
             onMouseLeave={() => api.start({ to: start })}
             style={{
               backgroundImage: `url('${background}')`
             }}
    >
      <animated.div
        className="h-[200%] w-full px-4 backdrop-brightness-75"
        style={props}
      >
        <div className="h-40 w-full flex" />
        <div className="flex flex-col h-fit">
          {children}
        </div>
      </animated.div>
    </article>
  );
};