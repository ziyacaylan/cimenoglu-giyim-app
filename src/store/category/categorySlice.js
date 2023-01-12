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
});

export const { setCategories } = categorySlice.actions;
export default categorySlice.reducer;
