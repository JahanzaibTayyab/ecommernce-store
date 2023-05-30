import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActiveMenuItem } from "@/types/activeMenuItem";

const initialState: ActiveMenuItem = {
  activeMenuItemIndex: 0,
  activeMenuItemText: "",
};

const activeMenuItemSlice = createSlice({
  name: "activeMenuItem",
  initialState,
  reducers: {
    setActiveMenuItemIndex(
      state: ActiveMenuItem,
      action: PayloadAction<number>
    ) {
      state.activeMenuItemIndex = action.payload;
    },
    setActiveMenuItemText(
      state: ActiveMenuItem,
      action: PayloadAction<string>
    ) {
      state.activeMenuItemText = action.payload;
    },
  },
});

export const activeMenuItemActions = activeMenuItemSlice.actions;

export default activeMenuItemSlice.reducer;
