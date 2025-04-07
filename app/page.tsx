import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Articles, Quizes } from "@/components/topics";


export default function Page() {
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
          Ленинград. После победы
        </h1>
      </div>
      <Articles />
      <h2 className="font-heading font-extrabold px-4 py-10 text-5xl mx-auto scroll-mt-16"
          id="articles">Карты</h2>
      <h3 className="font-heading font-medium text-lg w-[49rem] self-center text-center">План-карта поражений Куйбышевского района</h3>
      <div className="relative w-[49rem] h-96 self-center">
        <Image src="/map.jpg" fill alt="План-карта поражений Куйбышевского района"
               className="w-[49rem] self-center object-contain" />
      </div>
      <h3 className="font-heading font-medium text-lg w-[49rem] self-center text-center">Фотоколлажи блокадных разрушений центра
        города и современного вида зданий</h3>
      <div
        className="relative overflow-hidden mt-2 rounded-lg w-[49rem] self-center items-center flex justify-center h-[541px]">
        <iframe src="https://www.google.com/maps/d/embed?mid=1iVUiCVyI_QLzxPCS9nYKPdZIygQPvV8&ehbc=2E312F&noprof=1"
                width="786" height="600"
                className="self-center absolute -top-[59px]"
        />
      </div>
      <Quizes />
    </main>
  );
}
