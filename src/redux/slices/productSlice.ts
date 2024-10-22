import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

interface Product {
  id: number;
  name: string;
  slug?: string;
  productImage: string;
  productPrice: number;
  category: string;
  brand: string;
}

interface ProductState {
  allProducts: Product[];
  filteredProducts: Product[];
  sortOption: string;
  categoryFilter: string | null;
  brandFilter: string | null;
}

const initialState: ProductState = {
  allProducts: [],
  filteredProducts: [],
  sortOption: "",
  categoryFilter: null,
  brandFilter: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.allProducts = action.payload;
      // Automatically apply filters and sorting when setting products
      state.filteredProducts = applyFiltersAndSort(state);
    },
    setCategoryFilter(state, action: PayloadAction<string | null>) {
      state.categoryFilter = action.payload;
      // Re-apply filters and sorting when category changes
      state.filteredProducts = applyFiltersAndSort(state);
    },
    setBrandFilter(state, action: PayloadAction<string | null>) {
      state.brandFilter = action.payload;
      // Re-apply filters and sorting when brand changes
      state.filteredProducts = applyFiltersAndSort(state);
    },
    setSortOption(state, action: PayloadAction<string>) {
      state.sortOption = action.payload;
      // Re-apply sorting when sort option changes
      state.filteredProducts = applyFiltersAndSort(state);
    },
    loadMoreProducts(state, action: PayloadAction<Product[]>) {
      state.allProducts = [...state.allProducts, ...action.payload];
      // Automatically apply filters and sorting when more products are loaded
      state.filteredProducts = applyFiltersAndSort(state);
    },
  },
});

// Function to apply filters and sorting
function applyFiltersAndSort(state: ProductState): Product[] {
  let filtered = [...state.allProducts];

  // Apply Category Filter
  if (state.categoryFilter) {
    filtered = filtered.filter(
      (product) => product.category === state.categoryFilter,
    );
  }

  // Apply Brand Filter
  if (state.brandFilter) {
    filtered = filtered.filter(
      (product) => product.brand === state.brandFilter,
    );
  }

  // Apply Sorting
  if (state.sortOption === "Price: Low to High") {
    filtered = filtered.sort((a, b) => a.productPrice - b.productPrice);
  } else if (state.sortOption === "Price: High to Low") {
    filtered = filtered.sort((a, b) => b.productPrice - a.productPrice);
  }

  return filtered;
}

// Memoized Selectors
const selectProductsState = (state: { products: ProductState }) =>
  state.products;

export const selectFilteredProducts = createSelector(
  [selectProductsState],
  (productsState) => productsState.filteredProducts,
);

export const selectAllProducts = createSelector(
  [selectProductsState],
  (productsState) => productsState.allProducts,
);

export const {
  setProducts,
  setCategoryFilter,
  setBrandFilter,
  setSortOption,
  loadMoreProducts,
} = productSlice.actions;

export default productSlice.reducer;
