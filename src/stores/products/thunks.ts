// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';


// export const API = import.meta.env.VITE_BACKEND_URL;

// export interface QueryParams {
//   category?: string | undefined;
//   sort?: string | undefined;
//   priceRanges?: string[];
//   limit?: number | string | undefined;
//   offset?: number | string | undefined;
//   colors?: string[] | undefined;
//   brands?: string[] | undefined;
//   materials?: string[] | undefined;
//   [key: string]: string | number | boolean | undefined | any[];
// }

// export const fetchProducts = createAsyncThunk('products/fetchProducts', async (params: QueryParams, thunkAPI) => {
//   try {
//     const query = new URLSearchParams();
//     for (const key in params) {
//       if (params.hasOwnProperty(key) && params[key] !== undefined) {
//         query.append(key, String(params[key]));
//       }
//     }
//     const res = await axios.get(`${API}/products?${query.toString()}`);
//     return res.data;
//   } catch (err: any) {
//     return thunkAPI.rejectWithValue(err.response?.data || 'Fetch error');
//   }
// });


import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const API = import.meta.env.VITE_BACKEND_URL;

export interface FetchProductsParams {
  category?: string;
  sort?: string;
  page?: number;
  limit?: number;
  filters?: string; // query string like: colors=Red&brands=Nike&brands=Adidas
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
