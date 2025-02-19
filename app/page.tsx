import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Articles, Quizes } from "@/components/topics";
import { auth } from "@/auth";


export default async function Page() {
  const session = await auth();
  return (
    <main className="flex flex-col grow">
      <div className="flex justify-center items-center gap-8 p-4">
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
        <h1 className="font-extrabold font-heading lg:text-left text-center text-foreground text-6xl">
          Ленинград после победы
        </h1>
      </div>
      <Articles />
      {/*Здравствуйте, {session?.user?.name ?? "незнакомец"}!*/}
      <Quizes />
    </main>
  );
}
