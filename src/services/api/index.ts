import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type QueryParams = {
  category?: string;
  sort?: string;
  priceRanges?: string[];
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

      const res = await axios.get(`/api/products?${query.toString()}`);
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data || "Fetch error");
    }
  }
);
const BASE_URL = `http://localhost:5001`
export const filterProductsBy = async (caType: string, filters: string) => {
  try {
    const response = await fetch(
      `http://localhost:5001/cat/${caType}/${filters}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'Application/json',
        },
      }
    );

    if (!response.ok) throw new Error('err sending reqeust from productApi');
    const data = await response.json();
    return data.items;
  } catch (err: any) {
    console.log('err in request productApi', err);
  }
};

export type QueryOptions = {
  category?: string;
  limit?: number | string;
  offset?: number | string;
  sortBy?: number | string;
  filterBy?: number | string;
};

export const getProducts = async (queryOptions: QueryOptions) => {
  const {category, limit, offset, sortBy, filterBy} = queryOptions;
  try {
    const res = await fetch(`http://localhost:5001/products?${queryOptions.toString()}`);
    if (!res.ok) throw new Error('HTTP Err ! fetching products ..');
    const response = await res.json();
    return response.data;
  } catch (err: any) {
    console.log('err fetching init products err : ', err);
    return [];
  }
};


export const fetchProducts = async () => {
  try {
    const res = await fetch(`${BASE_URL}/products`,{
      method:'GET',
      headers: {
        'Content-Type': 'Application/json',
      },
    });
    if (!res.ok) throw new Error('HTTP Err ! fetching products ..');
    const response = await res.json();
    return response;
  } catch (err: any) {
    console.log('err fetching init products err : ', err);
    return [];
  }
};
