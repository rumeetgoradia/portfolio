interface SanityBase {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
  _type: string;
}

interface SanityImage {
  _type: "image";
  asset: SanityReference;
}

interface SanityReference {
  _ref: string;
  _type: "reference";
}

interface SanitySlug {
  _type: "slug";
  current: string;
}

interface SanityBlock {
  _key: string;
  _type: "block";
  children: SanitySpan[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface SanitySpan {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

export interface Work extends SanityBase {
  title: string;
  description: string;
  heroImage: SanityImage;
  isFeatured: boolean;
  liveUrl?: string;
  repoUrl?: string;
  slug: SanitySlug;
  body: SanityBlock[];
  categories: Category[];
}

export interface Category extends SanityBase {
  title: string;
  reference: string;
}

export interface CurrentlyList extends SanityBase {
  type: string;
  items: CurrentlyItem[];
}

export interface CurrentlyItem {
  title: string;
  subtitle: string;
  tags: string[];
}
