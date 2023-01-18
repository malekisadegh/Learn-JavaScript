import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    accessToken: '',
    invoiceId: '',
    checkout: false,
  },
  reducers: {
    login(state, action) {
      const actions = action.payload;
      state.accessToken = actions.accessToken;
      state.invoiceId = actions.invoiceId;
      state.isLoggedIn = true;
      state.checkout = actions.checkout;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.accessToken = '';
      state.invoiceId = '';
      state.checkout = false;
    },
  },
});

export const agpActions = slice.actions;

export default slice.reducer;
