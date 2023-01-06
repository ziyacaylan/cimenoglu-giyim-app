import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./auth/authSlice";
export const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
  },
});
