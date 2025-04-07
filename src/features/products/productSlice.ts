import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type Product = {
  id: string;
  name: string;
  productPrice: number;
  brand: string;
  colors?: string[];
  material?: string;
  ratings?: number;
  isAvailable?: boolean;
  stock?: number;
};

type QueryParams = {
  category?: string;
  sort?: string;
  priceRanges?: string[];
};

type FilterMetaEntry = { key: string; count: number };
type PriceRangeMeta = { range: string; count: number };

type FiltersMeta = {
  priceRanges: PriceRangeMeta[];
  colors: FilterMetaEntry[];
  brands: FilterMetaEntry[];
  materials: FilterMetaEntry[];
};

type ProductsState = {
  products: Product[];
  filtersMeta: FiltersMeta | null;
  loading: boolean;
  error: string | null;
};

const initialState: ProductsState = {
  products: [],
  filtersMeta: null,
  loading: false,
  error: null,
};

export const fetchFilteredProducts = createAsyncThunk(
  "products/fetchFilteredProducts",
  async (params: QueryParams, thunkAPI) => {
    try {
      const query = new URLSearchParams();
      if (params.category) query.append("category", params.category);
      if (params.sort) query.append("sort", params.sort);
      if (params.priceRanges) {
        params.priceRanges.forEach((range) => query.append("priceRanges", range));
      }

      const res = await axios.get(`http://localhost:5001/products?${query.toString()}`);
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data || "Fetch error");
    }
  }
);
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchFilteredProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchFilteredProducts.fulfilled,
        (state, action: PayloadAction<{ products: Product[]; filtersMeta: FiltersMeta }>) => {
          state.loading = false;
          state.products = action.payload.products;
          state.filtersMeta = action.payload.filtersMeta;
        }
      )
      .addCase(fetchFilteredProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productsSlice.reducer;
