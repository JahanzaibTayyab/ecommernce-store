import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { User, UserInfo } from "@/types/user";

const initialState: UserInfo = {
  userInformation: Cookies.get("userInfo")
    ? JSON.parse(Cookies.get("userInfo")!)
    : null,
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    userLogin(state, action: PayloadAction<User>) {
      state.userInformation = action.payload;
    },
    userLogout(state) {
      state.userInformation = null;
    },
  },
});
export const userInfoActions = userInfoSlice.actions;

export default userInfoSlice.reducer;
