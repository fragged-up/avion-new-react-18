import { Product } from '@/types/products';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/features/store';
import { loadMoreProducts } from '@/features/products/productSlice';
import { Pagination } from '@/services/api/productApi';

const getProducts = async (pagination: Pagination) => {
  try {
    const res = await fetch(
      `http://localhost:5001/products?limit=${pagination.limit.toString()}&offset=${pagination.offset.toString()}`,
    );
    if (!res.ok) throw new Error('HTTP Err ! fetching products ..');
    const response = await res.json();
    return response.data;
  } catch (err: any) {
    console.log('err fetching init products err : ', err);
    return [];
  }
};

const useInitProducts = (): {
  items: Product[];
  handleLoadMore: () => void;
} => {
  const dispatch = useDispatch();
  const [items, setItems] = useState<Product[]>([]);
  const { pagination } = useSelector((state: RootState) => state.product);
  const handleLoadMore = () => {
    dispatch(loadMoreProducts({}));
  };

  useEffect(() => {
    const handleProduct = async () => {
      const result = await getProducts(pagination);
      setItems(result);
    };
    handleProduct();
  }, [pagination]);

  return { items, handleLoadMore };
};

export { useInitProducts };
