import { getJoinedArtists, getSpotifyUrl } from "@/utils/spotify";
import { trpc } from "@/utils/trpc";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";

const NowPlaying: React.FC = ({}) => {
  const { data, isError, isLoading } = trpc.spotify.nowPlaying.useQuery(
    undefined,
    {
      refetchInterval: 1000 * 60,
    }
  );
  const [isPlaying, setPlaying] = useState<boolean>(false);

  useEffect(() => {
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
              href={getSpotifyUrl(data.item)}
              target={"_blank"}
              rel={"noreferrer noopener"}
              className="hover:text-primary"
              passHref
              title={`${data.item.name} [Spotify]`}
            >
              <div className="font-medium leading-none">{data.item.name}</div>
            </Link>
            <div className="mt-1 text-sm font-light leading-none">
              {getJoinedArtists(data.item)}
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
      <div className="h-[13px] w-[13px] animate-pulse rounded-sm bg-gray-100/50 backdrop-blur-sm" />
      <div>
        <div className="h-[16px] w-[120px] animate-pulse rounded-sm bg-gray-100/80 backdrop-blur-sm" />
        <div className="mt-1 h-[13px] w-[80px] animate-pulse rounded-sm bg-gray-100/60 backdrop-blur-sm" />
      </div>
    </div>
  );
};

const MusicBars: React.FC<{ animate: boolean }> = ({ animate }) => {
  const barClassname =
    "w-[3px] h-full scale-y-50 bg-content content-none origin-bottom transition-[background-color] ease-linear";

  return (
    <div className="relative flex h-[13px] w-[13px] flex-shrink-0 justify-between  ">
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
          "animation-delay--3500"
        )}
      />
    </div>
  );
};
