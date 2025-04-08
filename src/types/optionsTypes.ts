
export type SortOptions = {
  label: string;
  value: string;
  order: string;
};

export type FilterOptions = {
  label: string;
  value: string;
  inStock?: null | number | string;
  relatedOptions?: FilterOptions[];
  order?:string;
  filterKind?:string;
  groupId?:number
};

export type Filters = {
  filterByCategory?: FilterOptions[];
  filterByColor?: FilterOptions[];
  filterByMaterial?: FilterOptions[];
  filterByPrice?: FilterOptions[];
  filterByAvailability?: FilterOptions[];
  [key: string]: FilterOptions[] | undefined;
};
