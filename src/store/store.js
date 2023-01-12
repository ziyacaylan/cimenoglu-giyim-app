import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./auth/authSlice";
import themeReducer from "./theme/themeSlice";
import categorySlice from "./category/categorySlice";

export const store = configureStore({
  reducer: {
    auth: userAuthReducer,
    theme: themeReducer,
    categories: categorySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
