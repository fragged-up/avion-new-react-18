import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// import { filterProductsBy } from '@/services/api/productApi';
import filterThunk from './thunk';
// import { FilterOptions } from '@/types/optionsTypes';

interface FilterState {
  data: any | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | any;
  category: string;
  filterBy?: null | any[] | [];
  selectedFilters: any[];
  filterOps: any[];
}
const initialState: FilterState = {
  data: null,
  status: 'idle',
  error: null,
  category: '',
  filterBy: [],

  selectedFilters: [],
  filterOps: [],
};
const filterSlice = createSlice({
  name: 'filtrSlice',
  initialState,
  reducers: {
    setSelected: (state, action: PayloadAction<string[]>) => {
      state.selectedFilters = action.payload;
    },
    clearFilters: (state) => {
      state.selectedFilters = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(filterThunk.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(filterThunk.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(filterThunk.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = 'failed';
    });
  },
});

export const { setSelected, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;
