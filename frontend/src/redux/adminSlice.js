// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    isAdminExist: false, // Default to not authenticated
  },
  reducers: {
    isAdmin: (state,payload) => {
      state.isAdminExist = payload;
    }
  },
});

export const { isAdmin } = adminSlice.actions;

export default adminSlice.reducer;
