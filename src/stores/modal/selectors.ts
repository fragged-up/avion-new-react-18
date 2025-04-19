import { RootState } from '@/stores/core/store';

export const selectIsModalOpen = (state: RootState) => state.modal.isOpen;
export const selectIsSortOpen = (state: RootState) => state.modal.isSortOpen;
export const selectIsFilterOpen = (state: RootState) => state.modal.isFilterOpen;
export const selectResultsNumber = (state: RootState) => state.modal.resultsNumber;
export const selectIsMenuOpen = (state: RootState) => state.modal.isMenuOpen;
