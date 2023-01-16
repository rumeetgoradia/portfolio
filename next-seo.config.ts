import { clientEnv } from "@/env/schema.mjs";
import type { NextSeoProps } from "next-seo";

const {
  NEXT_PUBLIC_SITE_NAME,
  NEXT_PUBLIC_SITE_DESCRIPTION,
  NEXT_PUBLIC_SITE_URL,
} = clientEnv;

const SeoProps: NextSeoProps = {
  defaultTitle: NEXT_PUBLIC_SITE_NAME,
  titleTemplate: `%s — ${NEXT_PUBLIC_SITE_NAME || ""}`,
  description: NEXT_PUBLIC_SITE_DESCRIPTION,
  canonical: NEXT_PUBLIC_SITE_URL,
  openGraph: {
    title: NEXT_PUBLIC_SITE_NAME,
    description: NEXT_PUBLIC_SITE_DESCRIPTION,
    type: "website",
    locale: "en_IE",
    url: NEXT_PUBLIC_SITE_URL,
    site_name: NEXT_PUBLIC_SITE_NAME,
    images: [
      {
        url: `/images/seo/card.png`,
        width: 1200,
        height: 628,
        alt: NEXT_PUBLIC_SITE_NAME,
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
    site: NEXT_PUBLIC_SITE_NAME,
  },
};

export default SeoProps;
