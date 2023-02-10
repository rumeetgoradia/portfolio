import { type AppType } from "next/app";

import { trpc } from "@/utils/trpc";

import { Manrope } from "@next/font/google";

import { Navbar } from "@/components/Navbar";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import "@/styles/globals.css";
import clsx from "clsx";
import { DefaultSeo } from "next-seo";
import SeoProps from "next-seo.config";
import { ThemeProvider } from "next-themes";

const baseFont = Manrope({
  subsets: ["latin-ext"],
  style: ["normal"],
  display: "swap",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider defaultTheme="system" attribute="class">
        <DefaultSeo {...SeoProps} />
        <ParticlesBackground />
        <div
          className={clsx(
            baseFont.className,
            // mx-4 mb-40 mt-8   md:mt-16 lg:mx-auto
            "mx-auto flex max-w-4xl flex-col items-start antialiased md:flex-row"
          )}
          id="root"
        >
          <Navbar />
          {/* <PreviewMode /> */}
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
