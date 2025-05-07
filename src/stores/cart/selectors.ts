import { RootState } from '@/stores/core/store';

export const selectCartCount = (state:RootState) => state.cart.cartItems.length
export const selectCartItems = (state:RootState) => state.cart.cartItems;
export const selectIsCartOpen = (state:RootState) => state.cart.isCartOpen;
