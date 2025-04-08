import { RootState } from '@/stores/core/store';

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartTotal = (state: RootState) => state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
export const selectCartCount = (state: RootState) => state.cart.items.reduce((count, item) => count + item.quantity, 0);
export const isProductInCart = (id: string) => (state: RootState) =>  state.cart.items.some(item => item.id === id);

/*
usage in comp :
const total = useAppSelector(selectCartTotal);
const isInCart = useAppSelector(isProductInCart(product.id));
*/

