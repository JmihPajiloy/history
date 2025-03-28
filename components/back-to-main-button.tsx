"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { animated } from "@react-spring/web";
import { useBoop } from "@/hooks";


export const BackToMainButton = ({ variant = "default", className, ...rest }: Omit<ButtonProps, "onMouseEnter" | "asChild" | "children">) => {
  const [style, trigger] = useBoop({
    x: -3
  });

  return (
      <Button variant={variant} className={className} asChild onMouseEnter={() => trigger()} {...rest}>
        <Link href="/">
          <animated.div style={style} className="mr-1">
            <ArrowLeft className="size-4" />
          </animated.div>
          На главную
        </Link>
      </Button>
  );
};