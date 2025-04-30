import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface QueryParams {
  category?: string | undefined;
  sort?: string | undefined;
  priceRanges?: string[];
  limit?: number | string | undefined;
  offset?: number | string | undefined;
  colors?: string[] | undefined;
  brands?: string[] | undefined;
  materials?: string[] | undefined;
  [key: string]: string | number | boolean | undefined| any[];
}






// const url = 'http://localhost:5001/products?'
const url =`avm-back-production.up.railway.app/products?`

export const fetchProducts =createAsyncThunk("products/fetchProducts",
  async (params: QueryParams , thunkAPI) => {
    try {
      const query = new URLSearchParams();
      for (const key in params) {
        if (params.hasOwnProperty(key) && params[key] !== undefined) {
          query.append(key, String(params[key]));
        }
      }
      const res = await axios.get(`${url}${query.toString()}`);
      console.log(res);
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data || "Fetch error");
    }
  }
);









export const fetchProductById = createAsyncThunk("products/fetchById", async (id: string) => {
  const res = await fetch(`/api/products/${id}`);
  return await res.json();
});
