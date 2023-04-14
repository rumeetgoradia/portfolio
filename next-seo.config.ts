import { clientEnv } from "@/env/schema.mjs";
import type { NextSeoProps } from "next-seo";

const {
  NEXT_PUBLIC_SITE_NAME: siteName,
  NEXT_PUBLIC_SITE_DESCRIPTION: siteDescription,
  NEXT_PUBLIC_SITE_URL: siteUrl,
} = clientEnv;

const SeoProps: NextSeoProps = {
  defaultTitle: siteName,
  titleTemplate: `%s — ${siteName}`,
  description: siteDescription,
  openGraph: {
    title: siteName,
    description: siteDescription,
    type: "website",
    locale: "en_IE",
    url: siteUrl,
    siteName,
    images: [
      {
        url: `/images/seo/card.png`,
        width: 1200,
        height: 628,
        alt: siteName,
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
    site: siteName,
  },
};

export default SeoProps;
