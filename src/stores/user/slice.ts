import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState, User } from '@/types/user';
import { loadUserFromLocalStorage } from './thunks';

const initialState: UserState = {
  current: null,
  status: 'idle',
  error: null,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.current = action.payload;
    },
    clearUser(state) {
      state.current = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadUserFromLocalStorage.pending, state => {
        state.status = 'loading';
      })
      .addCase(loadUserFromLocalStorage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.current = action.payload;
      })
      .addCase(loadUserFromLocalStorage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { setUser, clearUser } = slice.actions;
export default slice.reducer;
