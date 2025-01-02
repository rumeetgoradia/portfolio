"use client";

import Image from "next/image";
import { api } from "~/trpc/react";

export default function DynamicImage({
  url,
  alt,
}: {
  url: string;
  alt: string;
}) {
  const { data, isLoading, isError } = api.plaiceholder.process.useQuery({
    src: url,
  });

  if (isLoading || !data || isError) {
    return null;
  }

  return (
    <Image
      src={data.src}
      width={data.width}
      height={data.height}
      alt={alt}
      placeholder="blur"
      blurDataURL={data.base64}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}
