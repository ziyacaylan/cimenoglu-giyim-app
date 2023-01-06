import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "userAuth",
  initialState: {
    userAuth: [],
    isLogin: false,
  },
  reducers: {},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
