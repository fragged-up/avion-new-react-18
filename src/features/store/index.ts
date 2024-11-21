import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// early structure

// import { configureStore } from '@reduxjs/toolkit';
// import modalEvents from '../ModalPropagation';

// export const store = configureStore({
//   reducer: {
//     modal: modalEvents,
//   },
// });

// // סוגים אוטומטיים עבור ה-RootState ו-AppDispatch
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
