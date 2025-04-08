import { FilterOptions } from '@/types';

export const filters = {
  filterByCategory: [
    {
      label: 'Brand',
      value: 'by-brand',
      relatedOptions: [
        {
          label: 'what-ever',
          value: 'what-ever',
          inStock: 5,
        },
      ],
    },
  ],
  filterByColor: [
    {
      label: 'Colors',
      value: 'by-colors',
      relatedOptions: [
        {
          label: 'what-dont-ever',
          value: 'what-dont-ever',
          inStock: 6,
        },
      ],
    },
  ],
  filterByPrice: [
    {
      label: 'Price',
      value: 'by-price',
      relatedOptions: [
        {
          label: 'what-ever-ever',
          value: 'what-ever-ever',
          inStock: 2,
        },
      ],
    },
  ],
  filterByAvailability: [
    {
      label: 'Availability',
      value: 'by-avl',
      relatedOptions: [
        {
          label: 'what',
          value: 'what',
          inStock: 4,
        },
      ],
    },
  ],
  filterByMaterials: [
    {
      label: 'Material',
      value: 'by-material',

      relatedOptions: [{ label: 'mat', value: 'mat', inStock: 3 }],
    },
  ],
};
