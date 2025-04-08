import { createAsyncThunk } from '@reduxjs/toolkit';
import type { User } from '@/types/user';

export const loadUserFromLocalStorage = createAsyncThunk<User | null>(
  'user/loadFromLocalStorage',
  async (_, { rejectWithValue }) => {
    try {
      const stored = localStorage.getItem('user');
      return stored ? JSON.parse(stored) : null;
    } catch (err) {
      return rejectWithValue('Failed to load user');
    }
  }
);
