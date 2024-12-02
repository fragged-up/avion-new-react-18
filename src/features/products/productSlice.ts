import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  offset: 0,
  limit: 20,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    initPage: (state, action) => {
      state.offset = state.limit;
      state.limit = state.limit + 12;
    },
  },
});

export const { initPage } = productSlice.actions;

export default productSlice.reducer;
