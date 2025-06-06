import "~/styles/globals.css";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "~/components/theme/theme-provider";
import { Wrapper } from "~/components/layout/wrapper";
import {manrope} from "~/app/fonts";


export const metadata: Metadata = {
  title: "Rumeet Goradia",
  description: "Rumeet Goradia's portfolio.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.className} font-sans`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>
            <Wrapper>{children}</Wrapper>
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
