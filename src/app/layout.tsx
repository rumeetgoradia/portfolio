import "~/styles/globals.css";

import { type Metadata } from "next";
import { Manrope } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "~/components/theme/theme-provider";
import { Layout } from "~/components/layout";

export const metadata: Metadata = {
  title: "Rumeet Goradia",
  description: "Rumeet Goradia. Senior Software Engineer @ Schonfeld, MS Machine Learning @ Columbia",
  // TODO
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>
            <Layout>
              {children}
            </Layout>
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
