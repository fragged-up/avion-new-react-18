import { RootState } from '@/features/store';
export const selectIsModalOpen = (state: RootState): boolean =>
  state.modal.isOpen;

export const selectModalState = (state: RootState): any => state.modal;

export const selectIsFilterOpen = (state: RootState) => state.modal.filterOpen;

export const selectIsSortOpen = (state: RootState) => state.modal.sortOpen;

export const selectOpenSortFromModal = (state: RootState) => {
  state.modal.isOpen;
  state.modal.sortOpen;
};

export const selectOpenFilterFromModal = (state: RootState) => {
  state.modal.isOpen;
  state.modal.filterOpen;
};
