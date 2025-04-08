import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TriggerState {
  isOpen: boolean;
  isSortOpen: boolean;
  isFilterOpen: null | boolean;
  resultsNumber: null | number;
}

const initialState: TriggerState = {
  isOpen: false,
  isSortOpen: false,
  isFilterOpen: null,
  resultsNumber: 0,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openGlobalModal: (state: TriggerState, action) => {
      state.isOpen = action.payload;
    },
    toggleSort: (state: TriggerState, action) => {
      state.isSortOpen = action.payload;
    },
    toggleFilter: (state) => {
      state.isFilterOpen = !state.isFilterOpen;
    },
    openSortFromModal: (state) => {
      state.isOpen = true;
      state.isSortOpen = true;
    },
    openFilterFromModal: (state) => {
      state.isOpen = true;
      state.isFilterOpen = true;
    },

    showResultsCalc: (state) => {},
  },
});

export const {
  openGlobalModal,
  toggleSort,
  toggleFilter,
  openSortFromModal,
  openFilterFromModal,
} = modalSlice.actions;
export default modalSlice.reducer;
