import { combineReducers } from '@reduxjs/toolkit';
import cart from '@/stores/cart/slice';
import user from '@/stores/user/slice';
import search from '@/stores/search/slice';
import modal from '@/stores/modal/slice';
import filters from '@/stores/filters/slice';
import products from '@/stores/products/slice';

const rootReducer = combineReducers({
  cart,
  user,
  search,
  modal,
  filters,
  products,
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
