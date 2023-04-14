import { type Work } from "@/types/sanity";
import Link from "next/link";

type LiveRepoButtonsProps = Pick<Work, "title" | "liveUrl" | "repoUrl">;

const LiveRepoButtons: React.FC<LiveRepoButtonsProps> = ({
  title,
  liveUrl,
  repoUrl,
}) => {
  return (
    <div className="flex w-full flex-row gap-2 ">
      {[liveUrl, repoUrl].map((url, index) => {
        if (!url) return null;

        const label = index === 0 ? "Live" : "Repo";
        return (
          <Link
            href={url}
            key={`${title}-${url}`}
            rel="noreferrer noopener"
            target="_blank"
            title={`${title} [${label}]`}
            className="w-full cursor-pointer rounded-sm border-[1px] border-content/10 px-4 py-2 text-center text-sm font-light uppercase leading-none tracking-widest no-underline 
						   transition-[border-color,background] hover:border-content hover:bg-content hover:text-background group-hover:border-content"
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
};

export default LiveRepoButtons;
