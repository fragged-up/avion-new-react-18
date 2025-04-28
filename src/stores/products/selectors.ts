import { Product } from '@/types/products';
import { RootState } from '@/stores/core/store';
import { useAppSelector } from '../core/hooks';

// export const selectProducts = (state: RootState) => state.products.products;

// export const selectFiltersMeta = (state: RootState) => state.products.filtersMeta;

export const selectProductsLoading = (state: RootState) => state.products.loading;
export const selectProductsError = (state: RootState) => state.products.error;
export const selectProductsResponse = (state: RootState) => state.products;
export const selectProductsFilters = (state: RootState) => state.products.filtersMeta;







export const selectProductById = (state: RootState, id: number | string): Product | undefined =>  state.products.items.find((product:any) => product.id === Number(id));


