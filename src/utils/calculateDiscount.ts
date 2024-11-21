/**
 * מחשב את המחיר לאחר הנחה
 * @param price המחיר המקורי
 * @param discount אחוז ההנחה
 * @returns המחיר לאחר הנחה
 */
export const calculateDiscount = (price: number, discount: number): number => {
  return price - price * (discount / 100);
};
