import { GeneralWorkDisplay } from "@/components/WorkDisplay";
import { type Work } from "@/types/sanity";
import { type TRPCResponse } from "@/types/trpc";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";

type WorkGridProps = TRPCResponse<Work[]>;

const WorkGrid: React.FC<WorkGridProps> = ({
  data: work,
  isError,
  isLoading,
}) => {
  const [activeCategoryFilters, setActiveCategoryFilters] = useState<string[]>(
    []
  );
  const [filteredWork, setFilteredWork] = useState<Work[]>([]);

  const toggleCategoryFilter = (categoryId: string) => {
    setActiveCategoryFilters((prev) => {
      const newFilters = [...prev];
      const index = newFilters.indexOf(categoryId);
      if (index < 0) {
        newFilters.push(categoryId);
      } else {
        newFilters.splice(index, 1);
      }

      return newFilters;
    });
  };

  useEffect(() => {
    if (!work) {
      setFilteredWork([]);
      return;
    }

    if (activeCategoryFilters.length == 0) {
      setFilteredWork(work);
      return;
    }

    setFilteredWork(
      work.filter((w) => {
        const workCategoryIds = w.categories.map((category) => category._id);
        return activeCategoryFilters.every((activeCategoryId) =>
          workCategoryIds.includes(activeCategoryId)
        );
      })
    );
  }, [activeCategoryFilters, work]);

  if (isLoading) {
    return <WorkGridSkeleton />;
  }

  if (isError || !work) {
    return (
      <>
        <h6 className="subheader">Well, this is embarrasing.</h6>
        <p>
          Sorry, looks like there was an error when trying to query my work.
          Please try again later.
        </p>
      </>
    );
  }

  if (filteredWork.length == 0) {
    return (
      <>
        <h6 className="subheader">Huh?</h6>
        <p>
          It shouldn&apos;t be possible to see this screen &mdash; I just added
          it to be safe. Congrats, you&apos;ve accomplished the impossible.
        </p>
      </>
    );
  }

  return (
    <Masonry
      breakpointCols={{ default: 2, 640: 1 }}
      className="work-grid -ml-4 -mb-4 flex w-auto"
      columnClassName="work-grid_column pl-4"
    >
      {filteredWork.map((work) => (
        <div className="mb-4" key={`all-work-${work.title}`}>
          <GeneralWorkDisplay
            {...work}
            activeCategoryFilters={activeCategoryFilters}
            toggleCategoryFilter={toggleCategoryFilter}
          />
        </div>
      ))}
    </Masonry>
  );
};

export default WorkGrid;

const WorkGridSkeleton: React.FC = () => {
  return <>Loading...</>;
};
