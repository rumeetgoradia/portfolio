import { type CurrentlyList } from "@/types/sanity";
import { type TRPCResponse } from "@/types/trpc";
type CurrentlyDisplaysProps = TRPCResponse<CurrentlyList[]>;

const CurrentlyDisplays: React.FC<CurrentlyDisplaysProps> = ({
  data: currentlyLists,
  isError,
  isLoading,
}) => {
  const render = () => {
    if (isLoading || !currentlyLists) {
      return <CurrentlyDisplaySkeleton />;
    }

    if (isError || currentlyLists.length < 1) {
      return (
        <p className="pt-3 leading-none">
          Sorry, something went wrong. Please refresh the page and try again
          later.
        </p>
      );
    }

    return currentlyLists.map((currentlyList) => {
      return (
        <CurrentlyDisplay
          {...currentlyList}
          key={`currently-${currentlyList.type}`}
        />
      );
    });
  };

  return (
    <>
      <h2 className="subheader">Currently...</h2>
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
        {render()}
      </div>
    </>
  );
};

export default CurrentlyDisplays;

const CurrentlyDisplaySkeleton: React.FC = () => {
  return (
    <>
      {[...Array(2).keys()].map((n) => (
        <div
          className="flex w-full flex-col"
          key={`currently-display-skel-${n}`}
        >
          <div className="h-[16px] w-[75px] animate-pulse rounded-sm bg-gray-100/70 animation-delay--1500" />
          <hr className="-mb-1 mt-1 w-[25px] border-[1px] border-content transition-[border-color]" />
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
        </div>
      ))}
    </>
  );
};

const CurrentlyDisplay: React.FC<CurrentlyList> = ({ items, type }) => {
  return (
    <div className="flex w-full flex-col">
      <h4 className="font-bold uppercase leading-none">{type}</h4>
      <hr className="-mb-1 mt-1 w-[25px] border-[1px] border-content transition-[border-color]" />
      {items.map(({ title, subtitle, tags }) => (
        <div className="w-full pt-3" key={`currently-${type}-${title}`}>
          <h5 className="font-semibold leading-[1.3]">{title}</h5>
          {subtitle && (
            <p className="text-sm leading-[1.3] opacity-70">{subtitle}</p>
          )}
          <p className="mt-1 text-xs font-light uppercase leading-[1.3] tracking-wider">
            {tags.join(" · ")}
          </p>
        </div>
      ))}
    </div>
  );
};
