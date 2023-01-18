import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'cart',
  initialState: {
    shopingCount: 0,
    shopingList: [],
  },
  reducers: {
    addToCart(state, action) {
      const actions = action.payload;
      state.shopingCount += actions.shopingCount;
      state.shopingList.push(actions.shopingproduct);
      console.log(state.shopingList);
    },
    removeEfomCarts(state, action) {
      const actions = action.payload;
      state.shopingCount = state.shopingCount--;
    },
    clearCart(state, action) {
      const actions = action.payload;
      state.shopingCount = 0;
      state.shopingList = [];
    },
  },
});

export const cartActions = slice.actions;

export default slice.reducer;
