import { createAsyncThunk } from '@reduxjs/toolkit';
import type { CartItem } from '@/types/cart';
import type { RootState } from '@/stores/core/store';

export const loadCartFromLocalStorage = createAsyncThunk<CartItem[]>(
  'cart/loadFromLocalStorage',
  async () => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  }
);

export const saveCartToLocalStorage = createAsyncThunk<void, void, { state: RootState }>(
  'cart/saveToLocalStorage',
  async (_, { getState }) => {
    const cart = getState().cart.items;
    localStorage.setItem('cart', JSON.stringify(cart));
  }
);
