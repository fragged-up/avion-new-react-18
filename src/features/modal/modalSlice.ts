import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TriggerState {
  isOpen: boolean;
  sortOpen: null | boolean;
  filterOpen: null | boolean;
}

const initialState: TriggerState = {
  isOpen: false,
  sortOpen: null,
  filterOpen: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openGlobalModal: (state) => {
      state.isOpen = !state.isOpen;
    },

    openSort: (state) => {
      state.sortOpen = !state.sortOpen;
    },
    openFilter: (state) => {
      state.filterOpen = !state.filterOpen;
    },
    openSortFromModal: (state) => {
      state.isOpen = true;
      state.sortOpen = true;
    },
    openFilterFromModal: (state) => {
      state.isOpen = true;
      state.filterOpen = true;
    },
  },
});

export const { openGlobalModal, openSort, openFilter, openSortFromModal, openFilterFromModal } = modalSlice.actions;
export default modalSlice.reducer;
