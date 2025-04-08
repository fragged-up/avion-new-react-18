import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchFilteredProducts, fetchProductById } from "./thunks";
import type { FiltersMeta, Product, ProductsState } from "@/types/products";

const initialState: ProductsState = {
  items: [],
  products: [],
  filtersMeta: null,
  loading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    // FetchProducts
    builder
      .addCase(fetchFilteredProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchFilteredProducts.fulfilled,
        (
          state,
          action: PayloadAction<{
            products: Product[];
            filtersMeta: FiltersMeta;
          }>
        ) => {
          state.loading = false;
          state.products = action.payload.products;
          state.filtersMeta = action.payload.filtersMeta;
        }
      )
      .addCase(fetchFilteredProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      /* ProductID */
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action: PayloadAction<Product>) => {
        state.loading = false;
        const existing = state.items.find((p) => p.id === action.payload.id);
        if (!existing) {
          state.items.push(action.payload);
        }
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productsSlice.reducer;
