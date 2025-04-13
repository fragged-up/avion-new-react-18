import { SortOptions } from '@/types/optionsTypes';

export const sortOptions: SortOptions[] = [
  { label: 'Best Sellers', value: 'best-sellers', order: 'by-rating' },
  { label: 'Sort by Price: Low To High', value: 'low-to-high', order: 'by-low',},
  { label: 'Sort by Price: High To Low', value: 'high-to-low', order: 'by-high',},

  { label: 'Name', value: 'name', order: 'by-name' },
  { label: 'Availablility', value: 'availablility', order: 'by-av' },
  { label: 'Height', value: 'height', order: 'by-height' },
  { label: 'Depth', value: 'depth', order: 'by-depth' },
];

export const optionsCheck: string[] = ['Best Sellers', 'Availability','Height', 'Depth', 'Name', 'HighPrice', 'LowPrice'];








