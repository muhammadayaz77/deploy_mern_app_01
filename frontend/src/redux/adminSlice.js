import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    isAdminExist: localStorage.getItem('isAdminExist') || false, // Load from localStorage
  },
  reducers: {
    isAdmin: (state, action) => {
      state.isAdminExist = action.payload;
      localStorage.setItem('isAdminExist', JSON.stringify(action.payload)); // Save to localStorage
    },
    logoutAdmin: (state) => {
      state.isAdminExist = false;
      localStorage.removeItem('isAdminExist'); // Clear on logout
    },
  },
});

export const { isAdmin, logoutAdmin } = adminSlice.actions;

export default adminSlice.reducer;
