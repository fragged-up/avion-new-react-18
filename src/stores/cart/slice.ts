import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  description:string;
  image?: string;
};

export type CartState = {
  cartItems: CartItem[] | any[] | any;
  isCartOpen: boolean;
};

const initialState: CartState = {
  cartItems: [],
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


    addToCart: (state, action: PayloadAction<any>) => {
      const itemId = action.payload._id;
      const existingItem = state.cartItems.find((item: any) => item._id === itemId);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },


    removeItem(state, action: PayloadAction<any>) {
      state.cartItems = state.cartItems.filter((item:any) => item.id !== action.payload);
    },

    increaseQty(state, action: PayloadAction<string>) {
      const item = state.cartItems.find((item:any) => item._id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQty(state, action: PayloadAction<string>) {
      const item = state.cartItems.find((item:any) => item._id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
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
