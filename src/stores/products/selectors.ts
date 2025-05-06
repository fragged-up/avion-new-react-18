import { RootState } from '@/stores/core/store';


export const selectProductsLoading = (state: RootState) => state.products.loading;
export const selectProductsError = (state: RootState) => state.products.error;
export const selectProductsResponse = (state: RootState) => state.products;
export const selectProductsFilters = (state: RootState) => state.products.filtersMeta;
export const selectSortOption = (state: RootState) => state.products.sortSelection;








