export interface FilterOption {
  id: string;
  label: string;
  value: string;
}

export interface SortOption {
  id: string;
  label: string;
  field: string;
  order: 'asc' | 'desc';
}
