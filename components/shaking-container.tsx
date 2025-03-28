"use client";

import { animated } from "@react-spring/web";
import type { PropsWithChildren } from "react";
import { useBoop } from "@/hooks";


type Props = {
  className?: string
}
export const ShakingContainer = ({ children, className }: PropsWithChildren<Props>) => {
  const [style, shake] = useBoop({
    rotate: 15
  });
  return <animated.button style={style} onClick={() => shake()} className={className}>
    {children}
  </animated.button>;
};