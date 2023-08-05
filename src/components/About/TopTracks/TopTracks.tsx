import { TOP_TRACKS_LIMIT } from "@/constants/spotify";
import { type Track } from "@/types/spotify";
import { type TRPCResponse } from "@/types/trpc";
import { getJoinedArtists, getSpotifyUrl } from "@/utils/spotify";
import clsx from "clsx";
import Link from "next/link";

type TopTracksProps = TRPCResponse<Track[]>;

const TopTracks: React.FC<TopTracksProps> = ({
  data: tracks,
  isError,
  isLoading,
}) => {
  if (isLoading) {
    return <TopTracksSkeleton />;
  }

  if (isError || !tracks || !tracks.length) {
    return (
      <div className="pt-4">Couldn&apos;t get top tracks from Spotify :(</div>
    );
  }

  return (
    <div className="w-full">
      {tracks?.map(({ name, ...track }, index) => {
        return (
          <div
            key={`top-track-${name}`}
            className={clsx(
              "flex flex-row items-start gap-3 px-2 py-4",
              index != tracks.length - 1 && "border-b-[1px] border-b-content/10"
            )}
          >
            <div className="flex-shrink-0 basis-4 pt-1 text-right text-xs font-bold opacity-50">
              {index + 1}
            </div>
            <div>
              <Link
                title={`${name} [Spotify]`}
                href={getSpotifyUrl(track)}
                className="inline-block font-semibold leading-[1.2] hover:text-primary"
              >
                {name}
              </Link>
              <div className="text-sm font-light">
                {getJoinedArtists(track)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const TopTracksSkeleton: React.FC = () => {
  return (
    <div className="w-full">
      {[...Array(TOP_TRACKS_LIMIT).keys()].map((i) => {
        return (
          <div
            key={`top-track-skel-${i}`}
            className={clsx(
              "flex flex-row items-start gap-3 px-2 py-4",
              i != TOP_TRACKS_LIMIT - 1 && "border-b-[1px] border-b-content/10"
            )}
          >
            <div className="basis-4 pt-1 text-right text-xs font-bold opacity-50">
              {i + 1}
            </div>
            <div>
              <div
                className="mb-1 h-[22px] animate-pulse rounded-sm bg-gray-100/80 backdrop-blur-sm "
                style={{ width: Math.random() * 200 + 50 }}
              />
              <div
                className="h-[18px] animate-pulse rounded-sm bg-gray-100/60 backdrop-blur-sm animation-delay--2000"
                style={{ width: Math.random() * 100 + 40 }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopTracks;
