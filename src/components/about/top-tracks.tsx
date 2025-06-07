"use client";

import { api as trpc } from "~/trpc/react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { cn } from "~/lib/utils";
import { EmblaCarouselType } from "embla-carousel";
import { Button } from "~/components/ui/button";
import { getJoinedArtists } from "~/lib/spotify";
import Link from "next/link";

const NUM_TRACKS = 10;

export const TopTracks: React.FC = () => {
  const { data, isError, isLoading } = trpc.spotify.topTracks.useQuery(
    { limit: NUM_TRACKS },
    {
      refetchInterval: 1000 * 60 * 60 * 24, // 1 day
      refetchOnWindowFocus: false,
    },
  );
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    if (!carouselApi) return;

    const updateCarouselState = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };

    updateCarouselState();

    carouselApi.on("select", updateCarouselState);

    return () => {
      carouselApi.off("select", updateCarouselState); // Clean up on unmount
    };
  }, [carouselApi]);

  const scrollToIndex = (index: number) => {
    carouselApi?.scrollTo(index);
  };

  return (
    <div className="flex w-[320px] flex-col items-center space-y-6">
      <Carousel
        className={"overflow-hidden rounded-sm"}
        setApi={setCarouselApi}
        plugins={[
          Autoplay({
            delay: 8000,
          }),
        ]}
        opts={{
          loop: false,
          active: !!data?.length,
        }}
      >
        <CarouselContent>
          {!data || isLoading ? (
            <CarouselItem>
              <div className="aspect-square w-[320px] animate-pulse bg-gray-300" />
            </CarouselItem>
          ) : (
            data.map((track, index) => {
              return (
                <CarouselItem
                  key={track.name}
                  className="group relative basis-full"
                >
                  <Link href={track.external_urls.spotify} title={track.name}>
                    {track.album.image && (
                      <Image
                        src={track.album.image.url}
                        alt={track.name}
                        width={track.album.image.width}
                        height={track.album.image.height}
                      />
                    )}
                    <div
                      className={cn(
                        "absolute bottom-0 left-0 flex w-full flex-col px-8 py-3",
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
            })
          )}
        </CarouselContent>
      </Carousel>
      <div className="flex w-full justify-around">
        {Array.from({
          length: NUM_TRACKS,
        }).map((_, index) => (
          <button
            key={index}
            disabled={!data?.length}
            onClick={() => scrollToIndex(index)}
            className={`h-2 w-2 rounded-full bg-foreground ${
              currentIndex === index ? "opacity-100" : "opacity-40"
            }`}
          />
        ))}
      </div>
      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
    </div>
  );
};
