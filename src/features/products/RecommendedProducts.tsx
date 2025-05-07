import type { ProductDetails } from '@/types/products';
import { useMemo } from 'react';

interface Props {
  currentProduct: ProductDetails;
  allProducts: ProductDetails[];
}

export default function RecommendedProducts({ currentProduct, allProducts }: Props) {
  const recommendedProducts = useMemo(() => {
    const filteredProducts = allProducts.filter(
      (product) =>
        Math.abs(product.id - currentProduct.id) <= 3 && product.id !== currentProduct.id,
    );
    return filteredProducts.slice(0, 4);
  }, [currentProduct, allProducts]);

  return (
    <div className="mx-auto w-[calc(100%-3rem)] py-8 md:w-[calc(100%-5rem)]">
      <h2 className="mb-6 font-clash text-xl tracking-wider">You might also like</h2>
      <div className="mx-auto grid grid-cols-2 gap-6 md:grid-cols-4">
        {recommendedProducts.map((product) => (
          <div key={product.id + '-' + product.name} className="product-card min-w-[150px]">
            {product.productImage && (
              <img
                src={product.productImage}
                alt={product.name || 'Product'}
                className="h-60 w-full object-cover"
              />
            )}

            <h3 className="mt-4 font-clash text-lg">{product.name}</h3>
            <p className="mt-2 font-satoshi text-base">£{product.productPrice}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button className="bg-[#f9f9f9] px-8 py-3 font-satoshi text-base font-normal text-[#2A254B]">
          View Collection
        </button>
      </div>
    </div>
  );
}
