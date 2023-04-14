import { type CurrentlyItem } from "@/lib/notion";
import { type TRPCResponse } from "@/types/trpc";

type CurrentlyDisplayProps = {
  category: string;
} & TRPCResponse<CurrentlyItem[]>;

const CurrentlyDisplay: React.FC<CurrentlyDisplayProps> = ({
  category,
  data,
  isError,
  isLoading,
}) => {
  const render = () => {
    if (isLoading || !data) {
      return <CurrentlyDisplaySkeleton />;
    }

    if (isError || data.length < 1) {
      return <p className="pt-3 leading-none">Nothing!</p>;
    }

    return (
      <>
        {data.map(({ title, subtitle, tags }) => (
          <div className="w-full pt-3" key={`currently-${category}-${title}`}>
            <h5 className="font-medium">{title}</h5>
            {subtitle && <p className="text-sm opacity-70">{subtitle}</p>}
            <p className="mt-2 text-xs font-light uppercase leading-none tracking-wider">
              {tags.join(" · ")}
            </p>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="flex w-full flex-col">
      <h4 className="font-bold uppercase leading-none">{category}</h4>
      <hr className="mt-1 -mb-1 w-[25px] border-[1px] border-content transition-[border-color]" />
      {render()}
    </div>
  );
};

const CurrentlyDisplaySkeleton: React.FC = () => {
  return (
    <div className="w-full pt-3">
      <div
        className="mb-1 h-[22px] animate-pulse rounded-sm bg-gray-100/80 backdrop-blur-sm"
        style={{ width: Math.random() * 150 + 100 }}
      />
      <div
        className="h-[18px] animate-pulse rounded-sm bg-gray-100/60 backdrop-blur-sm animation-delay--2000"
        style={{ width: Math.random() * 60 + 50 }}
      />
      <div
        className="mt-2 h-[12px] animate-pulse rounded-sm bg-gray-100/50 backdrop-blur-sm animation-delay--3500"
        style={{ width: Math.random() * 100 + 40 }}
      />
    </div>
  );
};

export default CurrentlyDisplay;
