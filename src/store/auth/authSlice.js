import { createSlice } from "@reduxjs/toolkit";
import { registerAsync, loginAsync } from "./authService";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) ?? false,
    isLoading: false,
  },
  reducers: {
    // login: (state, action) => {
    //   localStorage.setItem("user", JSON.stringify(action.payload));
    //   state.user = action.payload;
    //   console.log("user geldi mi: ", action.payload);
    // },
    logout: (state, action) => {
      localStorage.removeItem("user");
      state.user = false;
    },
  },
  extraReducers: (builder) => {
    //login
    // builder.addCase(loginAsync.pending, (state, action) => {
    //   state.isLoading = true;
    // });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
      console.log("kullanıcı benim :", action.payload);
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Birşeyler tes gitti...!");
    });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
