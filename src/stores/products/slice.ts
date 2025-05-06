import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "./thunks";
import type { FiltersMeta, Product, ProductsState } from "@/types/products";

const initialState: ProductsState = {
  items: [],
  products: [],
  selectedProduct: null,
  filtersMeta: {},
  sortSelection:'name',
  loading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct(state, action: PayloadAction<Product | null>) {
      state.selectedProduct = action.payload;
    },

  setSortSelection:(state,action:PayloadAction<ProductsState["sortSelection"]>)=>{
   state.sortSelection =action.payload;
  }

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
            products: Product[];
            filtersMeta: FiltersMeta;
          }>
        ) => {
          state.loading = false;
          state.products = action.payload.products;
          state.filtersMeta = action.payload.filtersMeta;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

  },
});
export const {  setSelectedProduct,setSortSelection } = productsSlice.actions;
export default productsSlice.reducer;
