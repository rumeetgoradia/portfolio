import { type TRPCResponse } from "@/types/trpc";
import clsx from "clsx";
import Image from "next/image";
import { useCallback, useMemo, useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import type { Settings } from "react-slick";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export type CarouselImage = {
  src: string;
  width: number;
  height: number;
};

type CarouselProps = TRPCResponse<CarouselImage[]>;

type HeightSpec = {
  px: number;
  className: string;
};
type HeightDef = {
  [k in "base" | "sm" | "md" | "lg"]: HeightSpec;
};

const HEIGHT: HeightDef = {
  base: { px: 250, className: "h-[250px]" },
  sm: { px: 300, className: "h-[300px]" },
  md: { px: 350, className: "h-[350px]" },
  lg: { px: 400, className: "h-[400px]" },
};

const Carousel: React.FC<CarouselProps> = (props) => {
  const propifyHeightSpec = useCallback(
    (heightSpec: HeightSpec): InnerCarouselProps => {
      return {
        heightClassName: heightSpec.className,
        heightPx: heightSpec.px,
      };
    },
    []
  );

  const baseCarousel = useMemo(
    () => <InnerCarousel {...props} {...propifyHeightSpec(HEIGHT.base)} />,
    [props, propifyHeightSpec]
  );
  const smCarousel = useMemo(
    () => <InnerCarousel {...props} {...propifyHeightSpec(HEIGHT.sm)} />,
    [props, propifyHeightSpec]
  );
  const mdCarousel = useMemo(
    () => <InnerCarousel {...props} {...propifyHeightSpec(HEIGHT.md)} />,
    [props, propifyHeightSpec]
  );
  const lgCarousel = useMemo(
    () => <InnerCarousel {...props} {...propifyHeightSpec(HEIGHT.lg)} />,
    [props, propifyHeightSpec]
  );

  return (
    <>
      <div className="block w-full sm:hidden" id="base-carousel">
        {baseCarousel}
      </div>
      <div className="hidden w-full sm:block md:hidden" id="sm-carousel">
        {smCarousel}
      </div>
      <div className="hidden w-full md:block lg:hidden" id="md-carousel">
        {mdCarousel}
      </div>
      <div className="hidden w-full lg:block" id="lg-carousel">
        {lgCarousel}
      </div>
    </>
  );
};

type InnerCarouselProps = CarouselSkeletonProps & { heightPx: number };

const InnerCarousel: React.FC<CarouselProps & InnerCarouselProps> = ({
  data: images,
  isLoading,
  isError,
  heightClassName,
  heightPx,
}) => {
  const sliderRef = useRef<Slider | null>(null);

  if (isError) {
    return null;
  }

  if (isLoading || !images) {
    return <CarouselSkeleton heightClassName={heightClassName} />;
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
    <div className={clsx("relative w-full", heightClassName)}>
      <div className="absolute left-0 top-0 w-full">
        <div className={clsx("relative z-[99] w-full px-0", heightClassName)}>
          <button
            className="absolute left-0 top-1/2 z-[100] flex h-8 w-8 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full border-[1px] border-transparent bg-background
		hover:text-lg  focus:border-current
    active:text-sm"
            aria-label="Previous carousel image"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <BsArrowLeft />
          </button>
          <div className="h-full w-full cursor-grab overflow-hidden rounded-sm active:cursor-grabbing">
            <Slider ref={sliderRef} {...settings}>
              {images.map(({ src, width, height }, index) => {
                const w = (width * heightPx) / height;

                return (
                  <div
                    className="pointer-events-none mx-2 select-none"
                    key={`${src}-carousel-image`}
                  >
                    <Image
                      src={src}
                      alt={`Carousel Image ${index + 1}`}
                      width={w}
                      height={heightPx}
                      placeholder="empty"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
          <button
            className="absolute right-0 top-1/2 z-[100] flex h-8 w-8 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border-[1px] border-transparent bg-background
	 hover:text-lg focus:border-current  active:text-sm"
            aria-label="Next carousel image"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

type CarouselSkeletonProps = { heightClassName: string };

const CarouselSkeleton: React.FC<CarouselSkeletonProps> = ({
  heightClassName,
}) => {
  return (
    <div
      className={clsx(
        "relative flex w-full items-center justify-center overflow-hidden rounded-sm px-0",
        heightClassName
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
