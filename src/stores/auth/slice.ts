import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUser, signupUser } from './thunks';

export interface User {
  email?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem('accessToken'),
  user: null,
  token: localStorage.getItem('accessToken'),
  loading: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem('accessToken');
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.isAuthenticated = true;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload as string | null;
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.loading = 'succeeded';
        state.isAuthenticated = true;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload as string | null;
      });
  },
});
export const { logout, setUser } = authSlice.actions;

export default authSlice.reducer;
