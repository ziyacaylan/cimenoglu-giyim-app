import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./auth/authSlice";
import themeReducer from "./theme/themeSlice";
export const store = configureStore({
  reducer: {
    auth: userAuthReducer,
    theme: themeReducer,
  },
});
