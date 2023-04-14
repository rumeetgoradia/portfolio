import { env } from "@/env/server.mjs";

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = env;
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

export const getAccessToken = async (): Promise<{ access_token: string }> => {
  const basic = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");
  const body = new URLSearchParams();
  body.append("grant_type", "refresh_token");
  body.append("refresh_token", SPOTIFY_REFRESH_TOKEN);

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  return response.json();
};
