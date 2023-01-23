import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchText: JSON.parse(localStorage.getItem("searchText")) ?? "",
    searchCategories:
      JSON.parse(localStorage.getItem("searchCategories")) ?? [],
    priceRange: JSON.parse(localStorage.getItem("priceRange")) ?? [],
    isSearching: false,
  },
  reducers: {
    addSearchText: (state, action) => {
      state.searchText = action.payload;
      localStorage.setItem("searchText", JSON.stringify(action.payload));
    },
    addSearchCategory: (state, action) => {
      state.searchCategories = action.payload;
      localStorage.setItem("searchCategories", JSON.stringify(action.payload));
    },
    addSearchPriceRange: (state, action) => {
      state.priceRange = action.payload;
      localStorage.setItem("priceRange", JSON.stringify(action.payload));
    },
  },
});

export const { addSearchText, addSearchCategory, addSearchPriceRange } =
  searchSlice.actions;
export default searchSlice.reducer;
