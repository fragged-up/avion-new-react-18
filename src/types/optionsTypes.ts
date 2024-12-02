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
  filterKind?: null | string;
  inStock?: null | number | string;
  isAvailable?: null | boolean;
};
