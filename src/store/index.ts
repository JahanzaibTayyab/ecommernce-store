import { configureStore } from "@reduxjs/toolkit";

import specialOfferProductsReducer from "./slice/specialOfferProducts.slice";
import newestProductReducer from "./slice/newestProduct.slice";
import SortedProductsListReducer from "./slice/sortedProductList.slice";
import cartUiReducer from "./slice/cartUI.slice";
import cartSliceReducer from "./slice/cart.slice";
import userInfoReducer from "./slice/user.slice";
import sideNavBarReducer from "./slice/sideNavBar.slice";
import megaMenuReducer from "./slice/megaMenu.slice";
import activeMenuItemReducer from "./slice/activeMenuItem.slice";
import settingBoxReducer from "./slice/settingBox.slice";
import favoriteReducer from "./slice/favorite.slice";
import categoriesReducer from "./slice/categories.slice";

export const store = configureStore({
  reducer: {
    specialOfferProductsList: specialOfferProductsReducer,
    newestProductsList: newestProductReducer,
    sortedProductsList: SortedProductsListReducer,
    cartUi: cartUiReducer,
    cart: cartSliceReducer,
    userInfo: userInfoReducer,
    sideNavBar: sideNavBarReducer,
    megaMenu: megaMenuReducer,
    activeMenuItem: activeMenuItemReducer,
    settingBox: settingBoxReducer,
    favorite: favoriteReducer,
    categories: categoriesReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ serializableCheck: false });
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
