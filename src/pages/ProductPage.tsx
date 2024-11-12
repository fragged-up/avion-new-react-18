import { useLocation } from 'react-router-dom';

import WhatsMake from '@/components/WhatsMake';

import ProductIdDetails from '@/components/ProductIdDetails';

import RecommendedProducts from '@/components/RecommendedProducts'; // New Component

import { useEffect, useState } from 'react';

export type ProductIdProps = {
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

export default function ProductPage() {
  const location = useLocation();

  const product = location.state?.product as ProductIdProps;

  const [allProducts, setAllProducts] = useState<ProductIdProps[]>([]);

  useEffect(() => {
    fetch('http://localhost:5001/products')
      .then(res => res.json())

      .then(data => {
        console.log('Fetched products:', data);

        if (data && Array.isArray(data.products)) {
          setAllProducts(data.products);
        }
      })

      .catch(err => console.error('Failed to fetch products', err));
  }, []);

  console.log('Current product:', product);

  console.log('All products:', allProducts);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className='w-full bg-white'>
      <div className='w-full'>
        <ProductIdDetails product={product} />
      </div>

      {allProducts.length > 0 && (
        <div className='w-full py-8'>
          <RecommendedProducts currentProduct={product} allProducts={allProducts} />
        </div>
      )}

      <div className='whats-make-container'>
        <WhatsMake />
      </div>
    </div>
  );
}
