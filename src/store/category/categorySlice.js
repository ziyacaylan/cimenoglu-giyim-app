import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { doc, onSnapshot } from "firebase/firestore";
import { categoriesRef } from "../../utils/firebase/firebase.utils";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const result = await onSnapshot(categoriesRef, (snapshot) =>
      snapshot.docs.map((doc) => doc.data())
    );
    return result;
  }
);

export const categorySlice = createSlice({
  name: "categoies",
  initialState: {
    categories: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.error.message;
    });
  },
});

export const {} = categorySlice.actions;
export default categorySlice.reducer;
