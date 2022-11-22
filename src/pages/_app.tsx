import { type AppType } from "next/app";

import { trpc } from "@/utils/trpc";

import { Libre_Franklin } from "@next/font/google";

import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import SeoProps from "next-seo.config";
import { ThemeProvider } from "next-themes";

const libreFranklinVariable = Libre_Franklin();

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...SeoProps} />
      <main className={libreFranklinVariable.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
};

export default trpc.withTRPC(MyApp);
