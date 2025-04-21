import type { CartItem, CartState } from '@/types/cart';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CartState = {
  cartItems: [],
  cartTotalQuantity:0,
  cartTotalAmount:0,
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
    clearCart(state) {
      state.cartItems = [];
    },


    addToCart(state, action: PayloadAction<CartItem>) {
      const existing = state.cartItems.find((i) => i.id === action.payload.id);
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        const cartItem = {...action.payload, quantity:1}
        state.cartItems.push(cartItem);
      }
    },

    removeItem(state, action: PayloadAction<CartItem["id"]>) {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },



    increaseQty: (state,action: PayloadAction<CartItem["id"]>) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },

    decreaseQty: (state, action: PayloadAction<CartItem["id"]>) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },

  },

});

export const {
  addToCart,
  removeItem,
  clearCart,

  increaseQty,
  decreaseQty,
  closeCart,
  openCart,
  toggleCart,

} = slice.actions;

export default slice.reducer;

// import { loadCartFromLocalStorage } from './thunks';
// extraReducers: (builder) => {
//   builder.addCase(loadCartFromLocalStorage.fulfilled, (state, action) => {
//     state.items = action.payload;
//   });
// },
