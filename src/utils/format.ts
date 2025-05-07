
export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

export const formatCategory = (location:any) => {
 return location.split('/')[1].toLowerCase()
}
