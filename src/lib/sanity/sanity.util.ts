import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./sanity.client";

const builder = imageUrlBuilder(sanityClient);

function sanityUrlFor(source: any) {
  return builder.image(source);
}

export default sanityUrlFor;
