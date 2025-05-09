import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts } from './thunks';
import type { FiltersMeta, Product } from '@/types/products';


export interface ProductsState {
  products: Product[];
  total?: number;
  selectedProduct: Product | null;
  filtersMeta: FiltersMeta | any;
  sortSelection: string;
  loading: boolean;
  error: string | null;
}
const initialState: ProductsState = {
  products: [],
  selectedProduct: null,
  filtersMeta: {},
  sortSelection: 'name',
  loading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedProduct(state, action: PayloadAction<Product | null>) {
      state.selectedProduct = action.payload;
    },
    setSortSelection(state, action: PayloadAction<ProductsState['sortSelection']>) {
      state.sortSelection = action.payload;
    },
    clearProducts(state) {
      state.products = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (
          state,
          action: PayloadAction<{
            data: {
              products: Product[];
              filtersMeta: FiltersMeta;
              total: number;
            };
            append: boolean;
          }>
        ) => {
          state.loading = false;
          state.products = action.payload.append
            ? [...state.products, ...action.payload.data.products]
            : action.payload.data.products;

          state.filtersMeta = action.payload.data.filtersMeta ?? {};
          state.total = action.payload.data.total;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },

});

export const { setSelectedProduct, setSortSelection, clearProducts } = productsSlice.actions;
export default productsSlice.reducer;
