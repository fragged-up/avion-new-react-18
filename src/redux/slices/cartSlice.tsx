import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: { id: string; quantity: number }[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ id: string }>) => {
      state.items.push({ id: action.payload.id, quantity: 1 });
    },
    removeItem: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

// ייצוא של הפעולות
export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
