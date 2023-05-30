import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Favorite } from "@/types/favorite";
import { Product } from "@/types/products";

const initialState: Favorite = {
  items: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite(state, action: PayloadAction<Product>) {
      state.items.push({
        ...action.payload,
      });
    },
    removeFromFavorite(state, action: PayloadAction<string>) {
      const productSlug = action.payload;
      state.items = state.items.filter(
        (item) => item.slug.current !== productSlug
      );
    },
    clearCart(state) {
      state = initialState;
    },
  },
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice.reducer;
