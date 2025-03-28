import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '@/services/api';
type Pagination = {
  offset: number | string;
  limit: number | string;
};

export const fetchProductsThunk = createAsyncThunk(
  'products/fetchProducts',
  async (pagination: Pagination) => {
    // 1.5 second delay for loading indicator purpose
    await new Promise((resolve) => setTimeout(resolve, 1500));
    try {
      const result = await getProducts(pagination);
      return result;
    } catch (err: any) {
      return console.log('err from productSlice ', err);
    }
  }
);

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
