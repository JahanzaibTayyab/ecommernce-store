import { Slug } from "./products";

export type ICategory = {
  title: string;
  slug: Slug;
  description?: string;
  parents?: any;
};
