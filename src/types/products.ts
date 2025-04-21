export type Product = {
  id: number;
  name?: string;
  slug?: string;
  productImage?: string;
  productTitle?: string;
  productPrice?: number;
  category?: string;
  brand?: string;
  stock?: number;
  isAvailable?: boolean;
  createdAt?: Date;
  ratings?: number;
  tags?: string[];
  colors?: string[];
  material?: string;
  shipping?: {
    weight?: number;
    dimensions?: {
      width?: number;
      height?: number;
      depth?: number;
    };
  };
  productDescription?: {
    main?: string;
    descOne?: string;
    descTwo?: string;
    descThree?: string;
  };

  productDimensions?: {
    height?: string;
    weight?: string;
    depth?: string;
  };
};

export interface ProductCardTypes {
  id: number;
  name: string;
  slug?: string;
  productImage: string;
  productPrice: number;
}
export type ProductDetails = {
  id: number;
  name?: string;
  productImage?: string;
  productTitle: string;
  productPrice: number;
  productDescription?: {
    main?: string;
    descOne?: string;
    descTwo?: string;
    descThree?: string;
  };
  productDimensions?: {
    height?: string;
    weight?: string;
    depth?: string;
  };
};

export interface ProductCard {
  productDescription: any;
  productDimensions: any;
  id: number;
  name: string;
  slug?: string;
  productImage: string;
  productPrice: number;
}

export type QueryParams = {
  category?: string;
  sort?: string;
  priceRanges?: string[];
};

export type FilterMetaEntry = { key: string; count: number };
export type PriceRangeMeta = { range: string; count: number };

export type FiltersMeta = {
  priceRanges: PriceRangeMeta[];
  colors: FilterMetaEntry[];
  brands: FilterMetaEntry[];
  materials: FilterMetaEntry[];
};

export type ProductsState = {
  items: any[];
  selectedProduct:null | any[] | any;
  products: Product[];
  filtersMeta: FiltersMeta | null;
  loading: boolean;
  error: string | null;
};
