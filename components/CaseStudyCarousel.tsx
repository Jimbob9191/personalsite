"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ImageLightbox } from "@/components/ImageLightbox"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const aspectRatioClasses: Record<string, string> = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
}

interface Props {
  images: { src: string; alt: string }[]
  caption?: string
  aspectRatio?: "landscape" | "portrait"
}

export function CaseStudyCarousel({ images, caption, aspectRatio = "landscape" }: Props) {
  const aspectClass = aspectRatioClasses[aspectRatio]
  const [mainApi, setMainApi] = useState<CarouselApi>()
  const [thumbApi, setThumbApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onThumbClick = useCallback(
    (index: number) => {
      if (!mainApi || !thumbApi) return
      mainApi.scrollTo(index)
    },
    [mainApi, thumbApi]
  )

  const onSelect = useCallback(() => {
    if (!mainApi || !thumbApi) return
    const index = mainApi.selectedScrollSnap()
    setSelectedIndex(index)
    thumbApi.scrollTo(index)
  }, [mainApi, thumbApi])

  useEffect(() => {
    if (!mainApi) return
    onSelect()
    mainApi.on("select", onSelect)
    mainApi.on("reInit", onSelect)
    return () => {
      mainApi.off("select", onSelect)
      mainApi.off("reInit", onSelect)
    }
  }, [mainApi, onSelect])

  return (
    <figure className="m-0 space-y-2">
      <Carousel setApi={setMainApi} className="w-full">
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <ImageLightbox src={img.src} alt={img.alt} className="block w-full cursor-zoom-in">
                <div className={cn("relative w-full overflow-hidden rounded-lg bg-muted", aspectClass)}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </ImageLightbox>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {images.length > 1 && (
        <Carousel
          setApi={setThumbApi}
          opts={{ containScroll: "keepSnaps", dragFree: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 flex-row">
            {images.map((img, index) => (
              <CarouselItem
                key={index}
                className="basis-1/5 cursor-pointer pl-2 sm:basis-1/6"
                onClick={() => onThumbClick(index)}
              >
                <div
                  className={cn(
                    "relative aspect-square overflow-hidden rounded-md border-2 transition-all",
                    index === selectedIndex
                      ? "border-foreground opacity-100"
                      : "border-transparent opacity-40 hover:opacity-70"
                  )}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}

      {caption && (
        <figcaption className="text-sm text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  )
}
