export type CategoryPathsParams = {
  category: string;
};

export type SubCategoryPathsParams = {
  category: string;
  subCategory: string;
};

export type TitlePathsParams = {
  category: string;
  subCategory: string;
  title: string;
};

export type SlugPathsParams = {
  slug: { current: string };
  category: string;
  subCategory: string;
  title: string;
};
