import sanityUrlFor from "@/lib/sanity/sanity.util";
import { type Work } from "@/types/sanity";
import clsx from "clsx";
import Image from "next/image";
import { LiveRepoButtons } from "../atoms/LiveRepoButtons";

type GeneralWorkDisplayProps = Work & {
  activeCategoryFilters: string[];
  toggleCategoryFilter: (categoryId: string) => void;
};

const GeneralWorkDisplay: React.FC<GeneralWorkDisplayProps> = ({
  title,
  description,
  heroImage,
  liveUrl,
  repoUrl,
  categories,
  activeCategoryFilters,
  toggleCategoryFilter,
}) => {
  return (
    <div
      className="group flex h-full flex-col overflow-hidden rounded-sm border-[1px] border-content/10 transition-[border-color] hover:border-content "
      title={title}
    >
      <div className="relative h-[20vh] flex-shrink-0 flex-grow-0">
        <Image
          src={sanityUrlFor(heroImage).url()}
          fill
          alt={title}
          className="object-cover object-center"
        />
      </div>
      <div className="flex w-full flex-grow flex-col justify-between gap-4 bg-background/80 p-4 backdrop-blur-sm">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{description}</p>
        <LiveRepoButtons title={title} liveUrl={liveUrl} repoUrl={repoUrl} />
        <div className=" flex w-full flex-wrap gap-1">
          {categories.map((category) => {
            const active = activeCategoryFilters.includes(category._id);
            return (
              <div
                className={clsx(
                  "cursor-pointer select-none rounded-sm  py-1 px-2 text-xs uppercase tracking-widest text-background",
                  active
                    ? "bg-primary/80 hover:bg-primary"
                    : "bg-content/30 hover:bg-content/50"
                )}
                onClick={() => toggleCategoryFilter(category._id)}
                title={
                  active
                    ? `Remove ${category.title} filter`
                    : `Filter by ${category.title}`
                }
                key={`${title}-${category.title}`}
              >
                {category.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GeneralWorkDisplay;
