import { FilterOptions } from '@/types/optionsTypes';

export const filterOptions: FilterOptions[] = [
  { label: 'Brand', value: 'by-brand', order: '' },
  { label: 'Material', value: 'by-tags', order: '' },
  { label: 'Colors', value: 'by-material', order: '' },
  { label: 'Availability', value: 'by-colors', order: '' },
  { label: 'PriceRange', value: 'by-avail', order: '' },
];
