export interface ThunkStatus {
  thunkStatus: {
    isFetching?: null | boolean;
    data: null | any;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: null | string | any | {};
  };
}
