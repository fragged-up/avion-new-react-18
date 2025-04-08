import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterOption, SortOption } from '@/types/filter';
import { fetchFilters } from './thunks';

interface FilterState {
  data: FilterOption[] | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  category: string;
  filterBy: FilterOption[];
  selectedFilters: string[];
  filterOps: FilterOption[];
  sort: {
    field: string;
    order: 'asc' | 'desc';
  };
}

const initialState: FilterState = {
  data: null,
  status: 'idle',
  error: null,
  category: '',
  filterBy: [],
  selectedFilters: [],
  filterOps: [],
  sort: {
    field: 'createdAt',
    order: 'desc',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSelectedFilters: (state, action: PayloadAction<string[]>) => {
      state.selectedFilters = action.payload;
    },
    clearSelectedFilters: (state) => {
      state.selectedFilters = [];
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setFilterBy: (state, action: PayloadAction<FilterOption[]>) => {
      state.filterBy = action.payload;
    },
    setFilterOps: (state, action: PayloadAction<FilterOption[]>) => {
      state.filterOps = action.payload;
    },
    setSort: (state, action: PayloadAction<{ field: string; order: 'asc' | 'desc' }>) => {
      state.sort = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilters.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchFilters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Unknown error';
      });
  },
});

export const {
  setSelectedFilters,
  clearSelectedFilters,
  setCategory,
  setFilterBy,
  setFilterOps,
  setSort,
} = filterSlice.actions;
