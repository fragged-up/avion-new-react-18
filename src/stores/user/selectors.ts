import { RootState } from '@/stores/core/store';

export const selectUser = (state: RootState) => state.user.current;
export const selectUserStatus = (state: RootState) => state.user.status;
export const selectUserError = (state: RootState) => state.user.error;
