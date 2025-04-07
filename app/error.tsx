"use client";

import { BackToMainButton } from "@/components/back-to-main-button";
import { ShakingContainer } from "@/components/shaking-container";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useBoop } from "@/hooks";
import { cn } from "@/lib/utils";
import { animated } from "@react-spring/web";
import { CircleAlert, RotateCcw } from "lucide-react";
import { useEffect } from "react";


const RetryButton = ({
                       onClick,
                       className,
                       variant = "outline",
                       ...rest
                     }: Omit<ButtonProps, "onMouseEnter" | "asChild" | "children">) => {
  const [style, trigger] = useBoop({
    rotate: -15
  });
  return (
    <Button variant={variant} onMouseEnter={() => trigger()} className={cn("w-full", className)}
            onClick={onClick} {...rest}>
      <animated.div style={style} className="mr-2">
        <RotateCcw className="size-4" />
      </animated.div>
      Повторить
    </Button>
  );
};

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
}
export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex grow mx-auto flex-col items-center justify-center gap-2 w-56">
     <ShakingContainer className="mb-4">
       <CircleAlert className="size-20" />
     </ShakingContainer>
      <h2 className="text-center font-semibold text-xl">Что-то пошло не так!</h2>
      <RetryButton onClick={() => reset()} />
      <BackToMainButton className="w-full" />
    </main>
  );
}