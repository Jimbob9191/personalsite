"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";

const images = [9, 10, 11, 13, 14, 12, 15, 17, 1, 2, 3, 4, 5, 7, 8].map(
  (n) => `/images/carousel/${n}.jpg`
);

export function PhotoCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      className="w-full"
      opts={{ loop: true, align: "start" }}
      setApi={setApi}
    >
      <div style={{ maskImage: "linear-gradient(to right, black 75%, transparent 100%)" }}>
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem
              className={cn("basis-3/5 transition-opacity duration-300", {
                "opacity-30": index !== current - 1,
              })}
              key={src}
            >
              <img
                alt={`Photo ${index + 1}`}
                className="w-full aspect-[3/4] rounded-xl object-cover"
                src={src}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
      <CarouselNext className="-right-4" />
    </Carousel>
  );
}
