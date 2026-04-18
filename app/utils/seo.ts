const BASE_URL = "https://rumeetgoradia.com";

export function seo({
  title,
  description,
  image,
}: {
  title: string;
  description?: string;
  image?: string;
}) {
  const imageUrl = image ? `${BASE_URL}${image}` : undefined;

  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    ...(imageUrl
      ? [
          { property: "og:image", content: imageUrl },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:image", content: imageUrl },
        ]
      : [{ name: "twitter:card", content: "summary" }]),
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}
