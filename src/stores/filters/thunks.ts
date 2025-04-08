import { createAsyncThunk } from '@reduxjs/toolkit';
import { FilterOption } from '@/types/filter';
import axios from 'axios';

export const fetchFilters = createAsyncThunk<FilterOption[]>(
  'filters/fetchFilters',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/filters');
      return data as FilterOption[];
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || 'Failed to fetch filters');
    }
  }
);
