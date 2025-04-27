import { createAsyncThunk } from "@reduxjs/toolkit";
import type { QueryParams } from "@/types/products";
import axios from "axios";

const backendAPI=`https://avm-back-production.up.railway.app`

console.log(" backendAPI:", backendAPI)

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
      const res = await axios.get(`${backendAPI}/products?${query.toString()}`);
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
