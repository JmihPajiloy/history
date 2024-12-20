"use client";

import React, { type PropsWithChildren } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const rem = (r: number): number => {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    return r * parseFloat(window.getComputedStyle(document.documentElement).fontSize);
  }
  return r * 16
}

export const ArticleCardTitle = ({ children, className, ...props }: PropsWithChildren<{className?: string}>) => {
  return (
    <h2 {...props} className={cn("text-2xl mt-64 font-semibold text-white h-24 flex items-end", className)}>{children}</h2>
  );
};

export const ArticleCardDescription = ({ children, className, ...props }: PropsWithChildren<{className?: string}>) => {
  return (
    <p {...props} className={cn("text-white mt-4 mb-3 h-[4.25rem] text-ellipsis overflow-hidden", className)}>{children}</p>
  );
};

type Props = {
  offset?: number,
  background?: string,
  href?: string
}

export const ArticleCard = ({ children, href = "/", background = "/img.png", offset = 8.25 }: PropsWithChildren<Props>) => {
  const [props, api] = useSpring(() => ({
    from: { y: 0, backdropFilter: "brightness(60%)" },
    to: { y: -rem(offset), backdropFilter: "brightness(40%)" }
  }));
  return (
    <article className="h-96 w-96 rounded-xl bg-cover bg-center overflow-hidden shadow"
             onMouseEnter={() => api.start({ to: { y: -rem(offset), backdropFilter: "brightness(40%)" } })}
             onMouseLeave={() => api.start({ to: { y: 0, backdropFilter: "brightness(60%)" } })}
             style={{
               backgroundImage: `url('${background}')`
             }}
    >
      <animated.div
        className="h-[200%] w-full p-4 backdrop-brightness-75"
        style={props}
      >
        {children}
        <Button className="w-full" variant="secondary" asChild>
          <Link href={href}>
            Тык!
          </Link>
        </Button>
      </animated.div>
    </article>
  );
};