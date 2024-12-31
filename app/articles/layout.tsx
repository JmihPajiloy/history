"use client";

import type { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { animated, config, useSpring } from "@react-spring/web";

const Back = () => {
  const [style, api] = useSpring(() => ({
    from: { transform: "translateX(0)" },
    to: { transform: "translateX(0)" },
    reverse: true,
    immediate: false,
    // reverse: true,
    config: config.wobbly,
  }));
  return (
    <div className="flex py-4">
      <Button variant="default" onMouseDown={() => api.start({
        from: { transform: "translateX(0)" },
        to: [
          { transform: "translateX(-50%)" },
          { transform: "translateX(0)" }
        ],
      })} asChild>
        <Link href="/">
        <animated.div style={style} className="mr-1">
          <ArrowLeft />
        </animated.div>
        {/*</div>*/}
        На главную
        </Link>
      </Button>
    </div>
  );
};

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="py-4 grow flex flex-col items-center">
      <div className="max-w-[48rem] mx-4 gap-4">
        <Back />
        {children}
        <Back />
      </div>
    </main>
  );
};

export default Layout;