// productApi.ts

// export const filterProductsBy = async (caType: string, filters: string) => {
//   try {
//     const response = await fetch(
//       `http://localhost:5001/cat/${caType}/${filters}`,

//       {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'Application/json',
//           'Accept-Encoding': 'gzip, deflate , br',
//         },
//       },
//     );

//     if (!response.ok) throw new Error('err sending reqeust from productApi');
//     const data = await response.json();
//     if (response) console.log('data.items', data.items);

//     return data.items;
//   } catch (err: any) {
//     console.log('err in request productApi', err);
//   }
// };

//thunk.ts :

// import { filterProductsBy } from '@/services/api/productApi';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// const filterThunk = createAsyncThunk(
//   'filters/productFilter',
//   async (payload, { signal, dispatch, getState }) => {
//     try {
//       const response = await filterProductsBy('ceramics', 'byBrand');

//       if (response) console.log(response);

//       return response;
//     } catch (err: any) {
//       console.log('err implemting in fitlerThunk', err);
//     }
//   },
// );

// export default filterThunk;

//filterSlice.ts

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import filterThunk from './thunk';

// interface FilterState {
//   data: any | null;
//   status: 'idle' | 'loading' | 'succeeded' | 'failed';
//   error: string | null | any;
// }
// const initialState: FilterState = {
//   data: null,
//   status: 'idle',
//   error: null,
// };
// const filterSlice = createSlice({
//   name: 'filtrSlice',
//   initialState,
//   reducers: {},
//   extraReducers(builder) {
//     builder.addCase(filterThunk.pending, (state) => {
//       state.status = 'loading';
//     });
//     builder.addCase(filterThunk.fulfilled, (state, action) => {
//       state.status = 'succeeded';
//       state.data = action.payload;
//       state.error = null;
//     });
//     builder.addCase(filterThunk.rejected, (state, action) => {
//       state.status = 'failed';
//       state.error = action.error.message || null;
//     });
//   },
// });

// export {};
// export default filterSlice.reducer;

//  store/rootReducer.ts :

// import { combineReducers } from '@reduxjs/toolkit';
// import modalReducer from '@/features/modal/modalSlice';
// import filterReducer from '@/features/filters/filtersSlice';

// const rootReducer = combineReducers({
//   modal: modalReducer,
//   filters: filterReducer,
// });

// export default rootReducer;

//ApiCheck.tsx :

// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { AppDispatch } from '@/features/store';
// import filterThunk from '@/features/filters/thunk';

// const ApiCheck = () => {
//   const dispatch: AppDispatch = useDispatch();
//   const state = useSelector((state: any) => state.filters);
//   const filterStatus = useSelector((state: any) => state.filters?.status);
//   const filtersData = useSelector((state: any) => state.filters?.data);
//   const filtersError = useSelector((state: any) => state.filters?.error);
//   console.log('filterStatus : ', filterStatus);
//   console.log('filtersData : ', filtersData);
//   console.log('filtersError : ', filtersError);
//   console.log('state :', state);

//   useEffect(() => {
//     dispatch(filterThunk());
//   }, [dispatch]);

//   return (
//     <div className="container">
//       <h1>ApiCheck</h1>
//       <p>This is the ApiCheck page.</p>

//       {/* Render Base on status  */}

//       {filterStatus && <p>Loading data ...</p>}

//       {filterStatus === 'succeeded' && (
//         <div>
//           <h2>Filters Products</h2>
//           <pre>filters data : {JSON.stringify(filtersData)}</pre>
//         </div>
//       )}
//       {filterStatus === 'failed' && <p>Error: {filtersError}</p>}
//     </div>
//   );
// };

// export default ApiCheck;
