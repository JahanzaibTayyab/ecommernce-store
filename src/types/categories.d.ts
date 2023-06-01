import { Slug } from "./products";

export type category = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  thumbnail?: any;
  subtitles: Array<string>;
  productsGroup: Array<category>;
};

export type Category = {
  title: string;
  slug?: Slug;
  description?: string;
  parents?: any;
  categories: Array<category>;
};
