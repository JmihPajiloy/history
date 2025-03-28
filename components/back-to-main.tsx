"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { animated } from "@react-spring/web";
import React from "react";
import { useBoop } from "@/hooks";


export const BackToMain = ({ className }: { className?: string }) => {
  const [styles, trigger] = useBoop({
    x: -5
  });

  return (
    <div className={cn("flex py-4", className)}>
      <Button variant="default" asChild onMouseEnter={() => trigger()}>
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