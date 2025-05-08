import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const API = import.meta.env.VITE_BACKEND_URL;

export interface FetchProductsParams {
  category?: string;
  sort?: string;
  page?: number;
  limit?: number;
  filters?: string;
  append?: boolean;
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (params: FetchProductsParams, thunkAPI) => {
    try {
      const {
        category,
        sort = 'availability',
        page = 1,
        limit = 20,
        filters = '',
      } = params;

      const offset = (page - 1) * limit;

      const queryString = new URLSearchParams(filters);
      if (category) queryString.append('category', category);
      if (sort) queryString.append('sort', sort);
      queryString.append('limit', String(limit));
      queryString.append('offset', String(offset));

      const url = `${API}/products?${queryString.toString()}`;
      const response = await axios.get(url);

      return {
        data: response.data,
        append: params.append ?? false,
      };
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data || 'Fetch error');
    }
  },
);
