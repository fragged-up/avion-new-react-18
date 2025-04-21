import type { CartItem, CartState } from '@/types/cart';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadCartFromLocalStorage } from './thunks';

const initialState: CartState = {
  items: [],
  isCartOpen: false,
};

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
    addItem(state, action: PayloadAction<CartItem>) {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart(state) {
      state.items = [];
    },
    addOrToggleItem(state, action: PayloadAction<CartItem>) {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        state.items = state.items.filter((i) => i.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCartFromLocalStorage.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  clearCart,
  addOrToggleItem,

  closeCart,
  openCart,
  toggleCart,

} = slice.actions;

export default slice.reducer;
