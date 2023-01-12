import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "categoies",
  initialState: {
    categories: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getCategories.pending, (state) => {
  //     state.isLoading = true;
  //   });
  //   builder.addCase(getCategories.fulfilled, (state, action) => {
  //     state.isLoading = false;
  //     state.categories = action.payload;
  //   });
  //   builder.addCase(getCategories.rejected, (state, action) => {
  //     state.isLoading = true;
  //     state.error = action.error.message;
  //   });
  // },
});

export const { setCategories } = categorySlice.actions;
export default categorySlice.reducer;
