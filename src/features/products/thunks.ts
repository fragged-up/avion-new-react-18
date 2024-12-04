import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '@/services/api/productApi';
import { Pagination } from '@/services/api/productApi';

export const fetchProductsThunk = createAsyncThunk(
  'products/fetchProducts',
  async (pagination: Pagination) => {
    // 1.5 second delay for loading indicator purpose
    await new Promise((resolve) => setTimeout(resolve, 1500));
    try {
      const result = await getProducts(pagination);
      return result;
    } catch (err: any) {
      return console.log('err from productSlice ', err);
    }
  },
);
