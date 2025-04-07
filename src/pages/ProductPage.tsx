import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { ProductIdProps } from '@/types';
import WhatsMake from '@/components/WhatsMake';
import ProductIdDetails from '@/components/ProductIdDetails';
import RecommendedProducts from '@/components/RecommendedProducts';

export default function ProductPage() {
  const url = `http://localhost:5001/products`;
  const location = useLocation();
  const loca = location.pathname;
  console.log(' ProductPage ~ loca:', loca);
  const product = location.state?.product as ProductIdProps;
  const [allProducts, setAllProducts] = useState<ProductIdProps[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const req = await fetch(url);
        if (!req.ok) throw new Error('Http Exception ..');
        const res = await req.json();
        setAllProducts(res);
      } catch (err: any) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="w-full bg-white">
      <div className="w-full">
        <ProductIdDetails product={product} />
      </div>

      {allProducts.length > 0 && (
        <div className="w-full py-8">
          <RecommendedProducts currentProduct={product} allProducts={allProducts} />
        </div>
      )}
      <div className="whats-make-container">
        <WhatsMake />
      </div>
    </div>
  );
}
