import { Product } from '@/types/products';
import { RootState } from '@/stores/core/store';

export const selectProducts = (state: RootState) => state.products.products;

export const selectFiltersMeta = (state: RootState) => state.products.filtersMeta;

export const selectProductsLoading = (state: RootState) => state.products.loading;

export const selectProductsError = (state: RootState) => state.products.error;

export const selectProductById = (state: RootState, id: number | string): Product | undefined =>  state.products.items.find((product) => product.id === Number(id));

