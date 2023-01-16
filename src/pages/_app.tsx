import { type AppType } from "next/app";

import { trpc } from "@/utils/trpc";

import { Manrope } from "@next/font/google";

import { Navbar } from "@/components/Navbar";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import SeoProps from "next-seo.config";
import { ThemeProvider } from "next-themes";

const base_font = Manrope({
  subsets: ["latin-ext"],
  style: ["normal"],
  display: "swap",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider defaultTheme="system" attribute="class">
        <DefaultSeo {...SeoProps} />
        <main className={base_font.className} id="root">
          <ParticlesBackground />
          <Navbar />
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
