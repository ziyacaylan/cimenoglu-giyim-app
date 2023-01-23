import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "basket",
  initialState: {
    basket: JSON.parse(localStorage.getItem("basket")) ?? [],
    total: JSON.parse(localStorage.getItem("total")) ?? 0,
    amount: JSON.parse(localStorage.getItem("amount")) ?? 0,
    isLoading: false,
    error: null,
  },
  reducers: {
    addProduct: (state, { payload }) => {
      const product_id = payload.id;
      const isAddProduct = state.basket.some((item) => item.id === product_id);

      if (isAddProduct) {
        //ürün ekli arttır
        const index = state.basket.findIndex((object) => {
          return object.id === product_id;
        });
        state.basket[index].amount += 1;
        state.amount += 1;
      } else {
        //ekle
        state.basket = [...state.basket, { ...payload, amount: 1 }];
        state.amount += 1;
      }
      localStorage.setItem("basket", state.basket);
    },
    clearBasket: (state, action) => {
      state.basket = [];
      state.amount = 0;
      state.total = 0;
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    removeProduct: (state, action) => {
      const id = action.payload;
      state.basket = state.basket.filter((product) => product.id !== id);
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    increase: (state, { payload }) => {
      const product = state.basket.find((product) => product.id === payload.id);
      product.amount = product.amount + 1;
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    decrease: (state, { payload }) => {
      const product = state.basket.find((product) => product.id === payload.id);
      product.amount = product.amount > 1 ? product.amount - 1 : product.amount;
      localStorage.setItem("basket", JSON.stringify(state.basket));
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
      localStorage.setItem(
        "amount",
        JSON.stringify(JSON.stringify(state.amount))
      );
      localStorage.setItem(
        "total",
        JSON.stringify(JSON.stringify(state.total))
      );
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
