import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'auth',
    initialState: { email: '', password: '', isLoggedIn: false },
    reducers: {
        login(state, action) {
            const actions = action.payload;
            console.log('action----',action)
            state.email = actions.email;
            state.password = actions.password;
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        }
    }
})

export const authActions = slice.actions;

export default slice.reducer