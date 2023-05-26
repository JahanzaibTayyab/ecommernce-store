import { Product } from "./products";

export type Favorite = {
  items: Product[];
};

export type FavoriteRootState = {
  favorite: Favorite;
};
