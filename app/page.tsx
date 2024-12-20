import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import React from "react";
import { Articles, Quizes } from "@/components/topics";


export default function Page() {
  return (
    <main className="flex flex-col grow">
      <div className="flex justify-center items-center gap-8 p-4 bg-accent shadow">
        <div className="w-1/2 hidden lg:block">
          <AspectRatio ratio={16 / 9}>
            <Image
              src="/img_1.png"
              alt="Peterhof"
              className="rounded-xl"
              fill
            />
          </AspectRatio>
        </div>
        <h1 className="font-extrabold font-heading lg:text-left text-center text-accent-foreground text-6xl">
          Ленинград после победы
        </h1>
      </div>
      <Articles />
      <Quizes />
    </main>
  );
}
