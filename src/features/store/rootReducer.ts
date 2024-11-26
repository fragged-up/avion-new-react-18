import { combineReducers } from '@reduxjs/toolkit';
import modalReducer from '@/features/modal/modalSlice';
import filterReducer from '@/features/filters/filtersSlice';

const rootReducer = combineReducers({
  modal: modalReducer,
  filters: filterReducer,
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
