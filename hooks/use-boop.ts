import { type SpringValue, useReducedMotion, useSpring } from "@react-spring/web";
import { useCallback, useEffect, useState } from "react";

export type UseBoopReturn = [
  { transform?: SpringValue<string> },
  () => void
]

export function useBoop({
                          x = 0,
                          y = 0,
                          rotate = 0,
                          scale = 1,
                          duration = 150,
                          config = {
                            tension: 300,
                            friction: 10
                          }
                        }): UseBoopReturn {
  const prefersReducedMotion = useReducedMotion();
  const [isBooped, setIsBooped] = useState(false);
  const style = useSpring({
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotate}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    config
  });
  useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(
      () => setIsBooped(false),
      duration
    );
    return () => window.clearTimeout(timeoutId);
  }, [isBooped]);
  const trigger = useCallback(() => setIsBooped(true), []);
  const appliedStyle = prefersReducedMotion ? {} : style;
  return [appliedStyle, trigger];
}