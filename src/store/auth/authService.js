import { createAsyncThunk } from "@reduxjs/toolkit";

import { login as loginHandle } from "../../utils/firebase/firebase.utils";

// register firebase
export const register = createAsyncThunk(
  "user/registerAsync",
  async (email, password) => {
    const user = await loginHandle(email, password);
    return user;
  }
);
