import sanityUrlFor from "@/lib/sanity/sanity.util";
import { type Work } from "@/types/sanity";
import Image from "next/image";
import { LiveRepoButtons } from "../atoms/LiveRepoButtons";

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
        <LiveRepoButtons title={title} liveUrl={liveUrl} repoUrl={repoUrl} />
      </div>
    </div>
  );
};

export default FeaturedWorkDisplay;
