// import { async } from "@firebase/util";
import { async } from "@firebase/util";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { register, login, logut } from "../../utils/firebase/firebase.utils";

// register firebase
export const registerAsync = createAsyncThunk(
  "user/registerAsync",
  async ({ email, password }) => {
    const user = await register(email, password);
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
