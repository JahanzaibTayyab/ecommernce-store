import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "@/types/products";
import { OfferProducts } from "@/types/offerProductsState";

const initialState: OfferProducts = {
  specialOfferProducts: [],
};

const specialOfferProductsSlice = createSlice({
  name: "specialOfferProducts",
  initialState,
  reducers: {
    addProducts(state, action: PayloadAction<Product[]>) {
      state.specialOfferProducts = action.payload;
    },
  },
});

export const specialOfferProductsActions = specialOfferProductsSlice.actions;

export default specialOfferProductsSlice.reducer;
