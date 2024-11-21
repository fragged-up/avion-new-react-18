import { combineReducers } from '@reduxjs/toolkit';
import modalReducer from '@/features/modal/modalSlice';

const rootReducer = combineReducers({
  modal: modalReducer,
});

export default rootReducer;

// example usage
// import productsReducer from '@/features/products/productsSlice';
// import cartReducer from '@/features/cart/cartSlice';
// import userReducer from '@/features/user/userSlice';
// const rootReducer = combineReducers({
//   products: productsReducer,
//   cart: cartReducer,
//   user: userReducer,
// });

// export default rootReducer;
