"use client";

import { api } from "~/trpc/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getJoinedArtists, getSpotifyUrl } from "~/lib/spotify";
import { cn } from "~/lib/utils";

export const NowPlaying: React.FC = ({}) => {
  const { data, isError, isLoading } = api.spotify.nowPlaying.useQuery(
    undefined,
    {
      refetchInterval: 1000 * 30,
      refetchOnWindowFocus: true,
    },
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
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-primary transition-colors"
              passHref
              title={`${data.item.name} (Spotify)`}
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

const NowPlayingSkeleton: React.FC = () => {
  return (
    <div className="flex items-start gap-2">
      <div className="mt-1 h-[13px] w-[13px] animate-pulse rounded-sm bg-gray-100/50 backdrop-blur-sm" />
      <div>
        <div className="h-[20px] w-[120px] animate-pulse rounded-sm bg-gray-100/80 backdrop-blur-sm" />
        <div className="mt-1 h-[16px] w-[80px] animate-pulse rounded-sm bg-gray-100/60 backdrop-blur-sm" />
      </div>
    </div>
  );
};

const MusicBars: React.FC<{ animate: boolean }> = ({ animate }) => {
  const barClassname =
    "w-[3px] h-full scale-y-50 bg-foreground content-none origin-bottom ease-linear";

  return (
    <div className="relative flex h-[13px] w-[13px] flex-shrink-0 justify-between">
      <span className={cn(barClassname, animate && "animate-scaleY")} />
      <span
        className={cn(barClassname, animate && "-delay-2s animate-scaleY")}
      />
      <span
        className={cn(barClassname, animate && "-delay-3.5s animate-scaleY")}
      />
    </div>
  );
};
