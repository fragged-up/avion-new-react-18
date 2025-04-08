import { RootState } from '@/stores/core/store';

export const selectSearchTerm = (state: RootState) => state.search.term;
