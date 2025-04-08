import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { SearchState } from '@/types/core';

const initialState: SearchState = {
  term: '',
};

const slice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.term = action.payload;
    },
    clearSearchTerm(state) {
      state.term = '';
    },
  },
});

export const { setSearchTerm, clearSearchTerm } = slice.actions;
export default slice.reducer;
