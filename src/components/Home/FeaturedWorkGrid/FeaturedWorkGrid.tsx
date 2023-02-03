import { WorkDisplay } from "@/components/WorkDisplay";
import { Work } from "@/types/sanity";
import { TRPCResponse } from "@/types/trpc";

type FeaturedWorkGridProps = TRPCResponse<Work[]>;

const FeaturedWorkGrid: React.FC<FeaturedWorkGridProps> = ({
  data: featuredWork,
  isError,
  isLoading,
}) => {
  if (isError) {
    return null;
  }

  if (isLoading || !featuredWork) {
    return <div>Loading featured work...</div>;
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <h2 className="text-3xl font-semibold">Featured Work</h2>
      <div className="cols-3 grid w-full grid-cols-1 gap-2 md:grid-cols-3">
        {featuredWork.map((fw) => (
          <div
            className="transition-transform  ease-in hover:scale-105"
            key={`${fw.slug.current}-featured-work`}
          >
            <WorkDisplay
              {...fw}
              description={undefined}
              categories={undefined}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedWorkGrid;
