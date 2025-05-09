import { combineReducers } from '@reduxjs/toolkit';
import cart from '@/stores/cart/slice';
import user from '@/stores/user/slice';
import search from '@/stores/search/slice';
import modal from '@/stores/modal/slice';
import products from '@/stores/products/slice';
import auth from '@/stores/auth/slice'

const rootReducer = combineReducers({
  auth,
  cart,
  user,
  search,
  modal,
  products
});

export default rootReducer;





