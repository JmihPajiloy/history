"use client";

import { useFetchGallery } from "@/hooks/use-fetch-gallery";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
        <Carousel className="w-full max-w-128 px-4" opts={{ align: "start"  }}>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselContent>
            {gallery.data.map((item) => (
              <CarouselItem key={item.id} className="h-96 w-full max-w-96 pr-2">
                <div className="flex items-center justify-center relative overflow-hidden h-full w-full ">
                  <Image src={item.url} alt={item.title} fill className="absolute object-cover rounded-lg" />
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