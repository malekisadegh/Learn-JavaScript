import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    accessTokenExpired: false,
    accessToken: '',
    userName: '',
    lang: 'fa',
    user: {},
  },
  reducers: {
    login(state, action) {
      const actions = action.payload;
      state.accessToken = actions.accessToken;
      state.userName = actions.userName;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.accessToken = '';
      state.userName = '';
    },
  },
});

export const authActions = slice.actions;

export default slice.reducer;
