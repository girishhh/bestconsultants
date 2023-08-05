import { createSlice } from '@reduxjs/toolkit';
export const initialState = {
  open: false,
  message: '',
  severity: 'success',
  autoHideDuration: 5000,
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setToast: (state, action) => ({ ...state, ...action.payload }),
  },
  extraReducers: (builder) => {    
  },
});

// Action creators are generated for each case reducer function
export const { setToast } = toastSlice.actions;
export default toastSlice.reducer;
