/**
 * ממיר מחיר למחרוזת בפורמט של מטבע
 * @param price המחיר
 * @returns מחרוזת בפורמט של דולר (USD)
 */
export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

export const formatCategory = (location:any) => {
 return location.split('/')[1].toLowerCase()
}
