import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./auth/authSlice";
import themeReducer from "./theme/themeSlice";
import categorySlice from "./category/categorySlice";
import productsSlice from "./products/productsSlice";
import basketSlice from "./basket/basketSlice";

export const store = configureStore({
  reducer: {
    auth: userAuthReducer,
    theme: themeReducer,
    categories: categorySlice,
    products: productsSlice,
    basket: basketSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
