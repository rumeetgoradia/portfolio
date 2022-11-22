import { type AppType } from "next/app";

import { trpc } from "@/utils/trpc";

import { Libre_Franklin } from "@next/font/google";

import { Navbar } from "@/components/Navbar";
import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import SeoProps from "next-seo.config";
import { ThemeProvider } from "next-themes";

const libreFranklin = Libre_Franklin({
  subsets: ["latin-ext"],
  variable: "--primary-font",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider attribute="class">
        <DefaultSeo {...SeoProps} />
        <main className={`${libreFranklin.variable} font-sans`}>
          <Navbar />
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
