import { createSlice } from '@reduxjs/toolkit';
import { fetchProductsThunk } from './thunks';

const initialState = {
  pagination: {
    offset: 0,
    limit: 20,
  },
  thunkStatus: {
    data: [] as any[],
    status: 'idle',
    error: null as string | null,
    isFetching: false,
  },
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    loadMoreProducts: (state, action) => {
      state.pagination.offset = state.pagination.limit;
      state.pagination.limit = state.pagination.limit + 12;
      if (state.pagination.limit >= 284) {
        state.pagination.offset = 272;
        state.pagination.limit = 284;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProductsThunk.pending, (state, action) => {
      state.thunkStatus.status = 'loading';
      state.thunkStatus.isFetching = true;
    });
    builder.addCase(fetchProductsThunk.fulfilled, (state, action) => {
      state.thunkStatus.status = 'succeeded';
      state.thunkStatus.isFetching = false;
      state.thunkStatus.data = [
        ...state.thunkStatus.data,
        ...(action.payload ?? []),
      ];
    });
    builder.addCase(fetchProductsThunk.rejected, (state, action) => {
      state.thunkStatus.error = action.error.message ?? null;
      state.thunkStatus.status = 'failed';
    });
  },
});

export const { loadMoreProducts } = productSlice.actions;

export default productSlice.reducer;
