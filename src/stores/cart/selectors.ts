import { RootState } from '@/stores/core/store';
import { CartItem } from '@/types/cart';

// Raw cartItems
export const selectCartItems = (state: RootState) => state.cart.cartItems;

// Totals
export const selectCartTotal = (state: RootState) =>
  state.cart.cartItems.reduce((total, { price, quantity }) => total + price * quantity, 0);

export const selectCartCount = (state: RootState) =>
  state.cart.cartItems.reduce((count, { quantity }) => count + quantity, 0);

// Checks
// export const isProductInCart = (state: RootState) =>
//   state.cart.cartItems.find(item => item.id === id);

// Quantity
// export const selectProductQuantity = (id: string) => (state: RootState): number =>
//   state.cart.cartItems.find(item => item.id === id)?.quantity ?? 1;

export const selectProductQuantity = (state: RootState, productId: number) => {
  const item = state.cart.cartItems.find((i) => i.id === productId);
  return item?.quantity ??1;
};

// UI
export const selectIsCartOpen = (state: RootState) => state.cart.isCartOpen;
export const selectSelectedProduct = (state: RootState) => state.products.selectedProduct;
/*
usage in comp :
const total = useAppSelector(selectCartTotal);
const isInCart = useAppSelector(isProductInCart(product.id));
*/

