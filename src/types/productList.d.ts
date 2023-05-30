import { Product } from "./products";

export type ProductList = {
  productsList: Product[] | [];
};

export type ProductListRootState = {
  sortedProductsList: ProductList;
};
