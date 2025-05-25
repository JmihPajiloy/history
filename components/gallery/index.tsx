"use client";

import { useFetchGallery } from "@/hooks/use-fetch-gallery";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Image from "next/image";

export const Gallery = () => {
  const gallery = useFetchGallery();

  if (gallery.isLoading) {
    return <>Loading...</>;
  }
  if (gallery.isError) {
    return <>Ошибка</>;
  }
  if (gallery.isSuccess) {
    return (
      <div className="w-screen-xl overflow-hidden px-4 flex justify-center">
        <div className="w-128 self-center items-center  flex justify-center flex-col pb-10">
          <Carousel className="w-full h-96 px-4" opts={{ align: "start" }}>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselContent>
              {gallery.data.map((item) => (
                <CarouselItem key={item.id} className="h-96 w-full pr-2">
                  <div className="relative h-full w-full overflow-hidden rounded-lg">
                    <Image
                      src={item.url}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="text-center mt-2 font-medium text-base text-foreground truncate w-full">
                    {item.title}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    );
  }
};
