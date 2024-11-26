import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// import { filterProductsBy } from '@/services/api/productApi';
import filterThunk from './thunk';
// import { FilterOptions } from '@/types/optionsTypes';

type Filtering = {
  category: string;
  filterType: string;
  items: any[];
};

type FFOptions = {
  label: string;
  value: string;
  order: string;
  inStock?: null | number | string;
};

interface FilterState {
  data: any | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | any;
  category: string;
  filterBy?: null | any[] | [];
  options: FFOptions[];
  selectedFilters: any[];
  filterOps: any[];
}
const initialState: FilterState = {
  data: null,
  status: 'idle',
  error: null,
  category: '',
  filterBy: [],
  options: [
    {
      label: '',
      value: '',
      order: '',
      inStock: null,
    },
  ],
  selectedFilters: [],
  filterOps: [],
};
const filterSlice = createSlice({
  name: 'filtrSlice',
  initialState,
  reducers: {
    // setSelected: (state: FilterState, action: PayloadAction<any>) => {
    // const option = action.payload;

    // state.selectedFilters = state.selectedFilters.includes(option)
    //   ? state.selectedFilters.filter((item: any) => item !== option)
    //   : [...state.selectedFilters, option];

    // },

    setSelected(state, action: PayloadAction<string[]>) {
      state.selectedFilters = action.payload;
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

export const { setSelected } = filterSlice.actions;
export default filterSlice.reducer;
