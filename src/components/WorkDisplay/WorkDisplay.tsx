import sanityUrlFor from "@/lib/sanity/sanity.util";
import { Work } from "@/types/sanity";
import Image from "next/image";
import Link from "next/link";

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<T>;
type WorkDisplayProps = PartialBy<Work, "description" | "categories">;

const WorkDisplay: React.FC<WorkDisplayProps> = ({
  categories,
  description,
  title,
  liveUrl,
  repoUrl,
  heroImage,
  slug,
}) => {
  console.log(heroImage);

  return (
    <Link href={`/work/${slug.current}`}>
      <div className="overflow-hidden rounded-sm border-[1px] border-ghost transition-colors hover:border-content">
        <div className="relative h-[10vh]">
          <Image
            src={sanityUrlFor(heroImage).url()}
            fill
            alt={title}
            className="object-cover object-center"
          />
        </div>
        <div className="flex w-full flex-col gap-4 bg-background/80 p-4 backdrop-blur-sm">
          <h3 className="text-xl font-semibold">{title}</h3>
          {description && <p>{description}</p>}
          <div className="flex flex-col gap-2 sm:flex-row">
            {[liveUrl, repoUrl].map((url, index) => {
              if (!url) return null;

              const title = index === 0 ? "Live" : "Repo";
              return (
                <a
                  rel="noreferrer noopener"
                  target="_blank"
                  className="w-full rounded-sm border-[1px] border-ghost px-4 py-2 text-center text-sm font-light uppercase leading-none tracking-widest no-underline
				  transition-colors hover:border-content hover:bg-content hover:text-background"
                >
                  {title}
                </a>
              );
            })}
          </div>
          {categories && <p>categories.join(" : ")</p>}
        </div>
      </div>
    </Link>
  );
};

export default WorkDisplay;
