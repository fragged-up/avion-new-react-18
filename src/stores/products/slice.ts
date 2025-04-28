import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "./thunks";
import type { FiltersMeta, Product, ProductsState } from "@/types/products";

const initialState: ProductsState = {
  items: [],
  products: [],
  selectedProduct: null,
  filtersMeta: {},
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

    //   setSelectedProduct = (id: number) => {
    //   if (!products|| products.length === 0) {
    //     console.log('Products not loaded yet!')
    //     return
    //   }
    //   const findId = products.value.find((p) => p.id === id) || null

    //   if (!findId) {
    //     console.log('Product Not Found for ID:', id)
    //   } else {
    //     selectedProduct.value = findId
    //     console.log('Selected Product:', selectedProduct.value)
    //   }
    // }


  },


  extraReducers: (builder) => {
    // FetchProducts
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
export const {  setSelectedProduct } = productsSlice.actions;
export default productsSlice.reducer;
