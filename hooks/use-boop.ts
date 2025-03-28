import { type SpringValue, useReducedMotion, useSpring } from "@react-spring/web";
import { useCallback } from "react";

type UseBoopReturn = [
  { transform?: SpringValue<string> },
  () => void
]

export const useBoop = ({
                          x = 0,
                          y = 0,
                          rotation = 0,
                          scale = 1,
                          timing = 150,
                          springConfig = { tension: 300, friction: 10 }
                        }): UseBoopReturn => {
  const prefersReducedMotion = useReducedMotion();
  const [style, api] = useSpring(() => ({
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",
    config: springConfig
  }));

  const trigger = useCallback(() => {
    if (prefersReducedMotion) return;

    api.start({
      transform: `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`,
      config: {
        ...springConfig,
        duration: timing
      },
      onRest: () => {
        api.start({
          transform: "translate(0px, 0px) rotate(0deg) scale(1)"
        });
      }
    });
  }, [x, y, rotation, scale, timing, springConfig, prefersReducedMotion, api]);

  const appliedStyle = prefersReducedMotion ? {} : style;
  return [appliedStyle, trigger];
};