import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<[]>) {
      state.data = action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice.reducer;
