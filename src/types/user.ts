
export type User = {
  id: string;
  email: string;
  name: string;
  avatar?: string;
};

export type UserState = {
  current: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};
