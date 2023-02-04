import { TRPCResponse } from "@/types/trpc";
import clsx from "clsx";
import Image from "next/image";
import { useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import type { Settings } from "react-slick";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export type CarouselImage = {
  src: string;
  width: number;
  height: number;
  blurDataUrl: string;
};

type CarouselProps = TRPCResponse<CarouselImage[]>;

const HEIGHT = {
  value: 300,
  className: "h-[300px]",
};

const Carousel: React.FC<CarouselProps> = ({
  data: images,
  isLoading,
  isError,
}) => {
  const sliderRef = useRef<Slider | null>(null);

  if (isError) {
    return null;
  }

  if (isLoading || !images) {
    return <CarouselSkeleton />;
  }

  const settings: Settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    variableWidth: true,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div
      className={clsx("container relative z-[99] w-full p-0", HEIGHT.className)}
    >
      <button
        className="absolute left-0 top-1/2 z-[100] flex h-8 w-8 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full border-[1px] border-transparent bg-background
		transition-[font-size,color,background,border-color] hover:text-lg focus:border-current  active:text-sm"
        aria-label="Previous carousel image"
        onClick={() => sliderRef.current?.slickPrev()}
      >
        <BsArrowLeft />
      </button>
      <div className="h-full w-full cursor-grab overflow-hidden rounded-sm active:cursor-grabbing">
        <Slider ref={sliderRef} {...settings}>
          {images.map(({ src, width, height, blurDataUrl }, index) => {
            const w = (width * HEIGHT.value) / height;

            return (
              <div
                className="pointer-events-none mx-2 select-none"
                key={`${src}-carousel-image`}
              >
                <Image
                  src={src}
                  alt={`Carousel Image ${index + 1}`}
                  width={w}
                  height={HEIGHT.value}
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                />
              </div>
            );
          })}
        </Slider>
      </div>
      <button
        className="absolute right-0 top-1/2 z-[100] flex h-8 w-8 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border-[1px] border-transparent bg-background
		transition-[font-size,color,background,border-color] hover:text-lg focus:border-current  active:text-sm"
        aria-label="Next carousel image"
        onClick={() => sliderRef.current?.slickNext()}
      >
        <BsArrowRight />
      </button>
    </div>
  );
};

const CarouselSkeleton: React.FC = () => {
  return (
    <div
      className={clsx(
        "flex w-full items-center justify-center overflow-hidden rounded-sm",
        HEIGHT.className
      )}
    >
      <div
        className="relative h-full px-2 
	 before:absolute before:top-0 before:right-full before:h-full before:w-96 before:animate-pulse before:bg-gray-100/80 before:backdrop-blur-sm
	 after:absolute after:top-0 after:left-full after:h-full after:w-96 after:animate-pulse after:bg-gray-100/80 after:backdrop-blur-sm after:!delay-[400ms]"
      >
        <div className="h-full w-64 animate-pulse bg-gray-300/90 backdrop-blur-sm !delay-[200ms]" />
      </div>
    </div>
  );
};

export default Carousel;
