import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
    total: 0,
    isLoading: false,
    error: null,
  },
  reducers: {
    addProduct: (state, action) => {
      state.basket.push(action.payload);
    },
    clearBasket: (state, action) => {
      state.basket = [];
    },
    removeProduct: (state, action) => {
      const id = action.payload;
      state.basket = state.basket.filter((product) => product.id !== id);
    },
    incrrease: (state, { payload }) => {
      const product = state.basket.find((product) => product.id === payload.id);
      product.amount = product.amount + 1;
    },
    decrease: (state, { payload }) => {
      const product = state.basket.find((product) => product.id === payload.id);
      product.amount = product.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.basket.forEach((product) => {
        amount += product.amount;
        total += product.amount * product.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const {
  addProduct,
  clearBasket,
  removeProduct,
  incrrease,
  decrease,
  calculateTotals,
} = categorySlice.actions;
export default categorySlice.reducer;
