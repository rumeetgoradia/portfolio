export function seo({
  title,
  description,
  image,
}: {
  title: string;
  description?: string;
  image?: string;
}) {
  return [
    { title },
    { name: "description", content: description },
    { name: "og:type", content: "website" },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    ...(image ? [{ name: "og:image", content: image }] : []),
  ];
}
