import type { Track } from "~/types/spotify";

/**
 * Safely extracts the Spotify URL from a track object.
 * Handles null input and potentially missing nested properties.
 *
 * @param track - The track object (or null). Can be the original TS Track type
 *                or the Zod-validated equivalent if the structure matches.
 * @returns The Spotify URL for the track, or a default Spotify URL if not found.
 */
export const getSpotifyUrl = (track: Track | null): string => {
    // Handle null track input gracefully
    if (!track) {
        return "https://open.spotify.com"; // Default fallback URL
    }

    // Safely access the URL using optional chaining, provide default if missing
    return track.external_urls?.spotify ?? "https://open.spotify.com";
};

/**
 * Safely gets a comma-separated string of artist names from a track object.
 * Handles null input and potentially missing or empty artist arrays.
 *
 * @param track - The track object (or null). Can be the original TS Track type
 *                or the Zod-validated equivalent if the structure matches.
 * @returns A comma-separated string of artist names, or an empty string if none found.
 */
export const getJoinedArtists = (track: Track | null): string => {
    // Handle null track input or missing/empty artists array gracefully
    if (!track?.artists?.length) {
        return ""; // Return empty string if no track or no artists
    }

    // Map artist names and join them with a comma and space
    return track.artists.map((artist) => artist.name).join(", ");
};