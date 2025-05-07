import { RootState } from '@/stores/core/store';
import { createSelector } from '@reduxjs/toolkit';

export const selectCartCount = (state:RootState) => state.cart.cartItems.length
export const selectCartItems = (state:RootState) => state.cart.cartItems;
export const selectIsCartOpen = (state:RootState) => state.cart.isCartOpen;
export const selectCartItemCount = createSelector([selectCartItems], (cartItems) => cartItems.reduce((total:any, item:any) => total + (item.quantity || 1), 0)  );
