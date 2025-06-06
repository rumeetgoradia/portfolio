"use client";

import { api } from "~/trpc/react";
import Link from "next/link";
import { getJoinedArtists, getSpotifyUrl } from "~/lib/spotify";
import { cn } from "~/lib/utils";
import type { Track } from "~/types/spotify";

export const NowPlaying: React.FC = ({}) => {
  const { data, isError, isLoading } = api.spotify.topTracks.useQuery(
    undefined,
    {
      refetchInterval: 1000 * 60 * 60 * 24, // 1 day
      refetchOnWindowFocus: false
    },
  );


  return (
    <div className="flex items-start gap-2">

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
        className={cn(barClassname, animate && "animate-scaleY -delay-2s")}
      />
      <span
        className={cn(barClassname, animate && "animate-scaleY -delay-3.5s")}
      />
    </div>
  );
};
