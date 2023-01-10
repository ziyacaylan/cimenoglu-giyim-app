import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) ?? false,
    isLoading: false,
  },
  reducers: {
    login: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
      console.log("user geldi mi: ", action.payload);
    },
    logout: (state, action) => {
      localStorage.removeItem("user");
      state.user = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
