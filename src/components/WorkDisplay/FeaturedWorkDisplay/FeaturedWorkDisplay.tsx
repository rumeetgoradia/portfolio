import sanityUrlFor from "@/lib/sanity/sanity.util";
import { type Work } from "@/types/sanity";
import Image from "next/image";

type WorkDisplayProps = Pick<
  Work,
  "title" | "liveUrl" | "repoUrl" | "heroImage"
>;

const FeaturedWorkDisplay: React.FC<WorkDisplayProps> = ({
  title,
  liveUrl,
  repoUrl,
  heroImage,
}) => {
  return (
    <div
      className="group flex h-full flex-col overflow-hidden rounded-sm border-[1px] border-content/10 transition-[border-color] hover:border-content "
      title={title}
    >
      <div className="relative h-[200px] flex-shrink-0 flex-grow-0 md:h-[120px]">
        <Image
          src={sanityUrlFor(heroImage).url()}
          fill
          alt={title}
          className="object-cover object-center"
        />
      </div>
      <div className="flex w-full flex-grow flex-col justify-between gap-4 bg-background/80 p-4 backdrop-blur-sm ">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div>
          <div className="flex flex-row gap-2 ">
            {[liveUrl, repoUrl].map((url, index) => {
              if (!url) return null;

              const label = index === 0 ? "Live" : "Repo";
              return (
                <a
                  key={`${title}-${url}`}
                  rel="noreferrer noopener"
                  target="_blank"
                  title={`${title} – ${label}`}
                  className="w-full cursor-pointer rounded-sm border-[1px] border-content/10 px-4 py-2 text-center text-sm font-light uppercase leading-none tracking-widest no-underline 
                               transition-[border-color,color,background] hover:border-content hover:bg-content hover:text-background group-hover:border-content"
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorkDisplay;
