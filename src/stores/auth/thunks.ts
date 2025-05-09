import { API } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message || 'Login failed');
      }

      const data = await response.json();
      localStorage.setItem('accessToken', data.access_token);
      return { token: data.access_token };
    } catch (error: any) {
      return rejectWithValue(error.message || 'Network error during login');
    }
  }
);

export const signupUser = createAsyncThunk(
  'auth/signup',
  async (userData: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API}/auth/sign-up`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message || 'Signup failed');
      }
      const data = await response.json();
      localStorage.setItem('accessToken', data.access_token);


      return { success: true };
    } catch (error: any) {
      return rejectWithValue(error.message || 'Network error during signup');
    }
  }
);
