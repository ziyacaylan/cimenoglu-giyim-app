import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  signInWithGooglePopup,
  register,
  login,
  logut,
} from "../../utils/firebase/firebase.utils";

//register firebase
export const registerAsync = createAsyncThunk(
  "user/registerAsync",
  async ({ email, password }) => {
    const user = await register(email, password);
    return user;
  }
);
//login with google
export const loginWithGooglePopup = createAsyncThunk(
  "firebase.utils/loginWithGoogle",
  async () => {
    const user = await signInWithGooglePopup();
    return user;
  }
);

// login firebase
export const loginAsync = createAsyncThunk(
  "firebase.utils/login",
  async ({ email, password }) => {
    const user = await login(email, password);
    return user;
  }
);

// logout firebase
export const logoutAsync = createAsyncThunk(
  "firebase.utils/logout",
  async () => {
    const result = await logut();
    return result;
  }
);
