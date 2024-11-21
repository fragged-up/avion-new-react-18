// import { useState } from 'react';
// import { Product } from '@/types';

// /**
//  * Hook לניהול עגלת קניות
//  * @returns פונקציות לעבודה עם עגלת הקניות (הוספה, הסרה, גישה לפריטים)
//  */
// export const useCart = () => {
//   const [cart, setCart] = useState<Product[]>([]);

//   const addToCart = (product: Product) => {
//     setCart((prev) => [...prev, product]);
//   };

//   const removeFromCart = (productId: number) => {
//     setCart((prev) => prev.filter((item) => item.id !== productId));
//   };

//   return { cart, addToCart, removeFromCart };
// };
