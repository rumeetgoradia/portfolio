import { type AppType } from "next/app";

import { trpc } from "@/utils/trpc";

import { Manrope } from "@next/font/google";

import { Footer } from "@/components/Footer";
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
            "relative z-[1] mx-auto max-w-4xl px-8 antialiased"
          )}
          id="root"
        >
          <div className="flex flex-col items-start gap-4 lg:flex-row lg:gap-8">
            <Navbar />
            {/* <PreviewMode /> */}
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
