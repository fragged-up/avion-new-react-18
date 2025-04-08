import { useState } from 'react';
import { useAppDispatch } from '@/stores/core/hooks';
import { fetchFilteredProducts } from '@/stores/products/thunks';

type Params = {
  category: string;
  sort?: string;
  priceRanges?: string[];
  limit?:number |string
  offset?:number | string;

};

export function useFilteredProducts() {
  const dispatch = useAppDispatch();
  const [products, setProducts] = useState<any[]>([]);
  const [filtersMeta, setFiltersMeta] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetch = async (params: Params) => {
    setLoading(true);
    setError(null);

    try {
      const result = await dispatch(fetchFilteredProducts(params)).unwrap();
      setProducts(result.products);
      setFiltersMeta(result.filtersMeta);
    } catch (err) {
      console.error("Failed to fetch filtered products:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { products, filtersMeta, fetch, loading, error };
}
