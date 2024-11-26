export type SortOptions = {
  label: string;
  value: string;
  order: string;
};

export type FilterOptions = {
  groupId: number;
  label: string;
  value: string;
  order: string;
  inStock?: null | number | string;
};
