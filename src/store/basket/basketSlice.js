import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
    total: 0,
    amount: 0,
    isLoading: false,
    error: null,
  },
  reducers: {
    addProduct: (state, { payload }) => {
      const product_id = payload.id;
      const isAddProduct = state.basket.some((item) => item.id === product_id);

      if (isAddProduct) {
        console.log("ürün ekli işte");
        //ürün ekli arttır
        const index = state.basket.findIndex((object) => {
          return object.id === product_id;
        });
        console.log(index);
        state.basket[index].amount += 1;
        state.amount += 1;
      } else {
        //ekle
        state.basket = [...state.basket, { ...payload, amount: 1 }];
        state.amount += 1;
      }
      console.log(state.basket);
    },
    clearBasket: (state, action) => {
      state.basket = [];
    },
    removeProduct: (state, action) => {
      const id = action.payload;
      state.basket = state.basket.filter((product) => product.id !== id);
    },
    increase: (state, { payload }) => {
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
  increase,
  decrease,
  calculateTotals,
} = categorySlice.actions;
export default categorySlice.reducer;
