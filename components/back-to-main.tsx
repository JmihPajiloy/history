"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { animated, config, useSpring } from "@react-spring/web";


export const BackToMain = ({ className }: { className: string }) => {
  const [styles, api] = useSpring(() => ({
    from: { x: 0 },
    config: config.wobbly
  }));

  return (
    <div className={cn("flex py-4", className)}>
      <Button variant="default" asChild onMouseEnter={() => api.start({
        to: [
          { x: -5 },
          { x: 0 },
        ],
      })}>
        <Link href="/">
          <animated.div style={styles}>
            <ArrowLeft className="mr-1 size-4" />
          </animated.div>
          На главную
        </Link>
      </Button>
    </div>
  );
};