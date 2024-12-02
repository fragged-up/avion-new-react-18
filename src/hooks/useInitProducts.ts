import { Product } from '@/types/products';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/features/store';
import { initPage } from '@/features/products/productSlice';

const getProducts = async (limit: number | string, offset: number | string) => {
  try {
    const res = await fetch(
      `http://localhost:5001/products?limit=${limit.toString()}&offset=${offset.toString()}`,
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
  const { limit, offset } = useSelector((state: RootState) => state.product);
  const handleLoadMore = () => {
    dispatch(initPage({}));
  };

  useEffect(() => {
    const handleProduct = async () => {
      const result = await getProducts(limit, offset);
      setItems(result);
    };
    handleProduct();
  }, [limit, offset]);

  return { items, handleLoadMore };
};

export { useInitProducts };
