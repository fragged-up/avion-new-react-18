
export type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  description:string;
  image?: string;
};

export type CartState = {
  cartItems: CartItem[];
  isCartOpen: boolean;
  cartTotalQuantity:number
  cartTotalAmount:number
};
