import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TriggerState {
  isOpen: boolean;
  isSortOpen: boolean;
  isFilterOpen: null | boolean;
  resultsNumber: null | number;
  isMenuOpen:boolean;
}

const initialState: TriggerState = {
  isOpen: false,
  isSortOpen: false,
  isFilterOpen: false,
  resultsNumber: 0,
  isMenuOpen:false
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openMenu: (state: TriggerState) => {
      state.isMenuOpen = true
    },
    closeMenu: (state: TriggerState) => {
      state.isMenuOpen = false
    },

    openSortFilterModal: (state: TriggerState,action) => {
      state.isOpen = action.payload;
    },
    closeSortFilterModal: (state: TriggerState,action) => {
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
  openSortFilterModal,
  closeSortFilterModal,
  toggleSort,
  toggleFilter,
  openMenu,
  closeMenu,
  openSortFromModal,
  openFilterFromModal,
} = modalSlice.actions;


export default modalSlice.reducer;
