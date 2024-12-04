import { FilterOptions } from '@/types/optionsTypes';

export const filterOptions: FilterOptions[] = [
  {
    label: 'Brand',
    value: 'by-brand',
    order: '',
    groupId: 2,
    filterKind: 'All',
  },
  {
    label: 'Material',
    value: 'by-material',
    order: '',
    groupId: 2,
    filterKind: 'All',
  },
  {
    label: 'Colors',
    value: 'by-colors',
    order: '',
    groupId: 2,
    filterKind: 'All',
  },
  {
    label: 'Availability',
    value: 'by-avail',
    order: '',
    groupId: 2,
    filterKind: 'All',
  },
];

export const filterPriceOptions: FilterOptions[] = [
  {
    label: '0 - 99 ₪',
    value: 'til-99',
    order: '',
    inStock: '9',
    groupId: 1,
    filterKind: 'Price',
  },
  {
    label: '100 - 199 ₪',
    value: '100-till-199',
    order: '',
    inStock: '4',
    groupId: 1,
    filterKind: 'Price',
  },
  {
    label: '200 - 299 ₪',
    value: '200-till-299',
    order: '',
    inStock: '11',
    groupId: 1,
    filterKind: 'Price',
  },
  {
    label: '300 - 399 ₪',
    value: '300-till-399',
    order: '',
    inStock: '5',
    groupId: 1,
    filterKind: 'Price',
  },
];

// const filterByColorOptions: FilterOptions[] =
// [{

// }]
