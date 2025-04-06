"use client";

import { api } from "~/trpc/react";
import Image from "next/image";
import {
  CarouselItem,
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "~/components/ui/carousel";
import { cn } from "~/lib/utils";
import type { CarouselImageData } from "~/lib/carousel";

interface ImageCarouselProps {
  images: CarouselImageData[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const isError = !images; // Simple check if props were passed

  if (isError) {
    return null;
  }

  return (
    <div className={"relative w-full"}>
      <Carousel
        opts={{
          align: "center",
          loop: true,
          active: !!images?.length,
        }}
        className={cn(
          "absolute left-0 top-0 w-full",
          images?.length && "cursor-grab active:cursor-grabbing",
        )}
      >
        <CarouselContent>
          {!images?.length ? (
            <CarouselSkeleton />
          ) : (
            <>
              {images.map((image, i) => (
                <CarouselItem key={image.src}>
                  <Image
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    blurDataURL={image.base64}
                    alt={`Carousel Image ${i + 1}`}
                    loading="lazy"
                    placeholder="blur"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="h-[250px] w-auto rounded-sm md:h-[350px] lg:h-[400px]"
                  />
                </CarouselItem>
              ))}
            </>
          )}
        </CarouselContent>

        <CarouselPrevious
          className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 border-foreground/40 text-foreground/40 transition-colors hover:border-foreground hover:text-foreground"
          disabled={!images?.length}
        />
        <CarouselNext
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 border-foreground/40 text-foreground/40 transition-colors hover:border-foreground hover:text-foreground"
          disabled={!images?.length}
        />
      </Carousel>
    </div>
  );
}

function CarouselSkeleton() {
  return (
    <>
      {[...Array<number>(3)].map((_, i) => {
        const animate =
          i % 2 === 0
            ? "animate-pulse"
            : "animate-[pulse_2s_ease-in-out_infinite_1s]";

        return (
          <CarouselItem key={i} className={"basis-1/3"}>
            <div
              className={cn(
                "h-[250px] w-full rounded-sm bg-gray-300 md:h-[350px] lg:h-[400px]",
                animate,
              )}
            />
          </CarouselItem>
        );
      })}
    </>
  );
}
