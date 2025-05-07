import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const API = import.meta.env.VITE_BACKEND_URL;

export interface QueryParams {
  category?: string | undefined;
  sort?: string | undefined;
  priceRanges?: string[];
  limit?: number | string | undefined;
  offset?: number | string | undefined;
  colors?: string[] | undefined;
  brands?: string[] | undefined;
  materials?: string[] | undefined;
  [key: string]: string | number | boolean | undefined | any[];
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (params: QueryParams, thunkAPI) => {
  try {
    const query = new URLSearchParams();
    for (const key in params) {
      if (params.hasOwnProperty(key) && params[key] !== undefined) {
        query.append(key, String(params[key]));
      }
    }
    const res = await axios.get(`${API}/products?${query.toString()}`);
    return res.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response?.data || 'Fetch error');
  }
});
