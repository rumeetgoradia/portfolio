"use client";

import { api } from "~/trpc/react";
import Link from "next/link";
import { getJoinedArtists, getSpotifyUrl } from "~/lib/spotify";
import { cn } from "~/lib/utils";
import type { Track } from "~/types/spotify";

export const NowPlaying: React.FC = () => {
  const { data, isError, isLoading } = api.spotify.nowPlaying.useQuery(
    undefined,
    {
      refetchInterval: 1000 * 30, // 30 seconds
      refetchOnWindowFocus: true,
      staleTime: 1000 * 20, // 20 seconds
    },
  );

  // Show skeleton while loading initial data
  if (isLoading) {
    return <NowPlayingSkeleton />;
  }

  // Determine if a track is currently playing and should be displayed
  const shouldShowTrack = !!(
    !isError && // No query error occurred
    data && // Data has been received
    data.is_playing && // Spotify reports playback is active
    data.currently_playing_type === "track" && // The item being played is a track
    !!data.item // Track details (item) are available
  );

  const playingTrackData = shouldShowTrack ? data.item : null;

  return (
    <div className="flex items-start gap-2">
      <MusicBars animate={shouldShowTrack} />
      <div>
        {playingTrackData ? (
          // Render track details only if shouldShowTrack is true and item is valid
          <>
            <Link
              href={getSpotifyUrl(playingTrackData as unknown as Track)}
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-primary"
              passHref
              title={`${playingTrackData.name} (Spotify)`}
            >
              <div className="font-medium leading-none">
                {playingTrackData.name}
              </div>
            </Link>
            <div className="mt-1 text-sm font-light leading-none">
              {getJoinedArtists(playingTrackData as Track)}{" "}
            </div>
          </>
        ) : (
          // Render fallback "Not Playing" state
          // This covers: initial load finished but not playing, error state,
          // playing non-track item, or playing track with null item details.
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
        className={cn(barClassname, animate && "animate-scaleY -delay-2s")}
      />
      <span
        className={cn(barClassname, animate && "animate-scaleY -delay-3.5s")}
      />
    </div>
  );
};
