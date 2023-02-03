// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

import { withPlaiceholder } from "@plaiceholder/next";

/** @type {import("next").NextConfig} */
const config = withPlaiceholder({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ik.imagekit.io", "cdn.sanity.io"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
export default config;
