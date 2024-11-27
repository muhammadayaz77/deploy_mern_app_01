// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false, // Default to not authenticated
  },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      console.log(state.isAuthenticated)
    },
    logout: (state) => {
      state.isAuthenticated = false;
      console.log('clic',state.isAuthenticated);
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
