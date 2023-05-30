import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "@/types/products";
import { ProductList } from "@/types/productList";

const initialState: ProductList = {
  productsList: [],
};

const newestProductsSlice = createSlice({
  name: "newestProducts",
  initialState,
  reducers: {
    addProducts(state, action: PayloadAction<Product[]>) {
      state.productsList = action.payload;
    },
  },
});

export const newestProductsActions = newestProductsSlice.actions;

export default newestProductsSlice.reducer;
