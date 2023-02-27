import { trpc } from "@/utils/trpc";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";

const NowPlaying: React.FC = ({}) => {
  const { data, isError, isLoading } = trpc.spotify.nowPlaying.useQuery();
  const [isPlaying, setPlaying] = useState<boolean>(false);

  useEffect(() => {
    console.log(data);

    if (!data) {
      setPlaying(false);
      return;
    }

    if (
      isError ||
      !data.is_playing ||
      data.currently_playing_type !== "track"
    ) {
      setPlaying(false);
      return;
    }

    setPlaying(true);
  }, [data, isError]);

  if (isLoading) {
    return <NowPlayingSkeleton />;
  }

  return (
    <div className="flex items-start gap-2">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <MusicBars animate={isPlaying} />
      <div>
        {data && isPlaying ? (
          <>
            <Link
              href={data.item.external_urls.spotify}
              target={"_blank"}
              rel={"noreferrer noopener"}
              className="transition-colors hover:text-primary"
              passHref
              title={`${data.item.name} [Spotify]`}
            >
              <div className="font-medium leading-none">{data.item.name}</div>
            </Link>
            <div className="mt-1 text-sm font-light leading-none">
              {data.item.artists.map((a) => a.name).join(", ")}
            </div>
          </>
        ) : (
          <>
            <div className="font-medium leading-none">Not Playing</div>
            <div className="mt-1 text-sm font-light">Spotify</div>
          </>
        )}
      </div>
    </div>
  );
};

export default NowPlaying;

const NowPlayingSkeleton: React.FC = () => {
  return (
    <div className="flex items-start gap-2">
      <div className="animate-pulse h-[13px] w-[13px] rounded-sm bg-gray-100/70 backdrop-blur-sm" />
      <div>
        <div className="animate-pulse h-[16px] w-[120px] rounded-sm bg-gray-100 backdrop-blur-sm" />
        <div className="animate-pulse mt-1 h-[13px] w-[80px] rounded-sm bg-gray-100/80 backdrop-blur-sm" />
      </div>
    </div>
  );
};

const MusicBars: React.FC<{ animate: boolean }> = ({ animate }) => {
  const barClassname =
    "w-[3px] h-full scale-y-50 bg-content content-none origin-bottom transition-colors";

  return (
    <div className="relative flex h-[13px] w-[13px] justify-between  ">
      <span className={clsx(barClassname, animate && "animate-bounce")} />
      <span
        className={clsx(
          barClassname,
          animate && "animate-bounce",
          "animation-delay--2000"
        )}
      />
      <span
        className={clsx(
          barClassname,
          animate && "animate-bounce",
          "animation-delay--4000"
        )}
      />
    </div>
  );
};
