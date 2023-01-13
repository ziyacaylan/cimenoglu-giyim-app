import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "categoies",
  initialState: {
    categories: [],
    currentCategory: "",
    isLoading: false,
    error: null,
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { setCategories, setCurrentCategory } = categorySlice.actions;
export default categorySlice.reducer;
