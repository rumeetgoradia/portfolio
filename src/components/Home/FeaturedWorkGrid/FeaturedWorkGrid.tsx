import { WorkDisplay } from "@/components/WorkDisplay";
import { type Work } from "@/types/sanity";
import { type TRPCResponse } from "@/types/trpc";
import clsx from "clsx";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

type FeaturedWorkGridProps = TRPCResponse<Work[]>;

const FeaturedWorkGrid: React.FC<FeaturedWorkGridProps> = ({
  data: featuredWork,
  isError,
  isLoading,
}) => {
  if (isError) {
    return null;
  }

  return (
    <div className="flex w-full flex-col">
      <h2 className="subheader">Featured Work</h2>
      <div className="grid w-full grid-cols-1 items-stretch gap-4 md:grid-cols-3">
        {isLoading || !featuredWork ? (
          <FeaturedWorkGridSkeleton />
        ) : (
          <>
            {featuredWork.map((fw) => (
              <div
                className="h-full transition-transform hover:scale-[1.025]"
                key={`${fw.slug.current}-featured-work`}
              >
                <WorkDisplay
                  {...fw}
                  description={undefined}
                  categories={undefined}
                />
              </div>
            ))}
          </>
        )}
      </div>
      <Link
        href="/work"
        className="mr-auto mt-4 flex items-center gap-[10px] transition-[gap] hover:gap-[15px] hover:text-primary"
      >
        <span>View all work</span>
        <span>
          <HiOutlineArrowNarrowRight className="align-bottom" />
        </span>
      </Link>
    </div>
  );
};

const FeaturedWorkGridSkeleton: React.FC = () => {
  const classes: {
    [k: number]: { delay: string; bg: string };
  } = {
    0: { delay: "", bg: "bg-gray-300/90" },
    1: { delay: "delay-[200ms]", bg: "bg-gray-100/80" },
    2: { delay: "delay-[400ms]", bg: "bg-gray-300/90" },
  };

  return (
    <>
      {Object.keys(classes).map((val) => {
        const thisClasses = classes[parseInt(val)];

        return (
          <div
            key={`featured-work-grid-skeleton-${val}`}
            className={clsx(
              "h-[350px] w-full animate-pulse rounded-sm backdrop-blur-sm md:h-[258px]",
              thisClasses?.bg,
              thisClasses?.delay
            )}
          />
        );
      })}
    </>
  );
};

export default FeaturedWorkGrid;
