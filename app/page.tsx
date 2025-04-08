import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Articles, Quizes } from "@/components/topics";

export default function Page() {
  return (
    <main className="flex flex-col grow">
      <div className="flex flex-col lg:flex-row justify-between items-center p-4 max-w-screen-xl mx-auto w-full">
        <div className="w-full lg:w-1/2">
          <AspectRatio ratio={16 / 9}>
            <Image
              src="/img_1.png"
              alt="Peterhof"
              className="rounded-xl"
              fill
              priority
            />
          </AspectRatio>
        </div>
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:pl-10">
          <h1 className="font-extrabold font-heading text-center lg:text-right text-foreground text-5xl lg:text-6xl">
            Ленинград. После победы
          </h1>
        </div>
      </div>

      <div className="w-full max-w-screen-xl mx-auto px-4 mt-8 mb-4">
        <div className="h-px bg-gray-200 w-full"></div>
      </div>

      <Articles />
      <div className="px-4 max-w-screen-xl mx-auto w-full">
        <h2
          className="font-heading font-extrabold py-10 text-3xl md:text-4xl lg:text-5xl text-center scroll-mt-16"
          id="articles"
        >
          Карты
        </h2>

        <div className="flex flex-col items-center">
          <h3 className="font-heading font-medium text-lg text-center mb-4">
            План-карта поражений Куйбышевского района
          </h3>
          <div className="relative w-full max-w-3xl h-64 sm:h-96">
            <Image
              src="/map.jpg"
              fill
              alt="План-карта поражений Куйбышевского района"
              className="object-contain"
            />
          </div>

          <h3 className="font-heading font-medium text-lg text-center mt-8 mb-4">
            Фотоколлажи блокадных разрушений центра города и современного вида
            зданий
          </h3>
          <div className="relative overflow-hidden mt-2 rounded-lg w-full max-w-3xl h-[300px] sm:h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1iVUiCVyI_QLzxPCS9nYKPdZIygQPvV8&ehbc=2E312F&noprof=1"
              width="100%"
              height="600"
              className="absolute top-0 left-0 w-full"
            />
          </div>
        </div>
      </div>
      <Quizes />
    </main>
  );
}
