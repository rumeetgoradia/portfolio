"use client";

import { api as trpc } from "~/trpc/react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import React, { useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import { getJoinedArtists } from "~/lib/spotify";
import Link from "next/link";

export const TopTracks: React.FC<{ limit: number; className?: string }> = ({
  limit,
  className,
}) => {
  const { data, isLoading } = trpc.spotify.topTracks.useQuery(
    { limit },
    {
      refetchInterval: 1000 * 60 * 60 * 24, // 1 day
      refetchOnWindowFocus: false,
    },
  );
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  return (
    <div>
      {/*<h2 className="mb-4 text-3xl font-medium">My Top Tracks</h2>*/}
      {isLoading || !data || data.length === 0 ? (
        <TopTracksSkeleton limit={limit} className={className} />
      ) : (
        <CarouselWrapper
          className={className}
          currentIndexState={[currentIndex, setCurrentIndex]}
          numElements={data.length}
        >
          {data.map((track, index) => {
            return (
              <CarouselItem
                key={track.name}
                className="group relative basis-full"
              >
                <Link
                  href={track.link}
                  title={track.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {track.album.image && (
                    <Image
                      src={track.album.image.url}
                      alt={track.name}
                      width={track.album.image.width}
                      height={track.album.image.height}
                      className="rounded-sm"
                    />
                  )}
                  <div
                    className={cn(
                      "absolute bottom-0 left-0 flex w-full flex-col rounded-b-sm px-8 py-3",
                      "bg-primary/75 opacity-0 backdrop-blur-sm transition-[opacity,background] duration-1000 ease-in-out group-hover:bg-primary/90",
                      "text-gray-100",
                      currentIndex === index && "opacity-100",
                    )}
                  >
                    <div className="text-xl font-medium">{track.name}</div>
                    <div className="text-sm font-light">
                      {getJoinedArtists(track)}
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselWrapper>
      )}
    </div>
  );
};

const TopTracksSkeleton: React.FC<{ limit: number; className?: string }> = ({
  limit,
  className,
}) => {
  return (
    <div
      className={cn("flex w-full flex-col items-center space-y-6", className)}
    >
      <div className="aspect-square w-full animate-pulse rounded-sm bg-gray-300" />
      <div className="flex w-full animate-pulse justify-around space-x-3">
        {Array.from({ length: limit }).map((_, index) => (
          <div
            key={index}
            className="h-2 w-2 rounded-full bg-foreground opacity-40"
          />
        ))}
      </div>
    </div>
  );
};

const CarouselWrapper: React.FC<{
  children: React.ReactNode;
  numElements: number;
  currentIndexState: [number, React.Dispatch<React.SetStateAction<number>>];
  className?: string;
}> = ({
  children,
  numElements,
  currentIndexState: [currentIndex, setCurrentIndex],
  className,
}) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!carouselApi) return;
    const updateCarouselState = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };
    updateCarouselState();
    carouselApi.on("select", updateCarouselState);
    return () => {
      carouselApi.off("select", updateCarouselState);
    };
  }, [carouselApi, setCurrentIndex]);

  const scrollToIndex = (index: number) => {
    carouselApi?.scrollTo(index);
  };

  return (
    <div
      className={cn("flex w-full flex-col items-center space-y-6", className)}
    >
      <Carousel
        className={"overflow-hidden rounded-sm"}
        setApi={setCarouselApi}
        plugins={[
          Autoplay({
            delay: 8000,
            stopOnInteraction: true,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>{children}</CarouselContent>
      </Carousel>
      <div className="flex w-full justify-around space-x-3">
        {Array.from({
          length: numElements,
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "h-2 w-2 rounded-full bg-foreground transition-opacity",
              currentIndex === index ? "opacity-100" : "opacity-40",
            )}
          />
        ))}
      </div>
    </div>
  );
};
