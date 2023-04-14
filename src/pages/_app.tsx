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
import Head from "next/head";

const baseFont = Manrope({
  subsets: ["latin-ext"],
  style: ["normal"],
  display: "swap",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#005642"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Rumeet Goradia" />
        <meta name="application-name" content="Rumeet Goradia" />
        <meta name="msapplication-TileColor" content="#00a300" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#0e0e10" />
        <meta name="robots" content="all" />
      </Head>
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
