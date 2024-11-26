import { filterProductsBy } from '@/services/api/productApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

const filterThunk = createAsyncThunk('filters/productFilter', async () => {
  try {
    const response = await filterProductsBy('ceramics', 'byBrand');
    if (response) console.log(response);
    return response;
  } catch (err: any) {
    console.log('err implemting in fitlerThunk', err);
  }
});

export default filterThunk;
// payload, { signal, dispatch, getState }
