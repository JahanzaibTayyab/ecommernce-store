import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartUI } from "@/types/cart";

const initialState: CartUI = {
  cartBoxIsVisible: false,
};

const cartUiSlice = createSlice({
  name: "cartUi",
  initialState,
  reducers: {
    toggleCartBox(state, action: PayloadAction<boolean>) {
      state.cartBoxIsVisible = action.payload;
    },
  },
});

export const cartUiActions = cartUiSlice.actions;

export default cartUiSlice.reducer;
