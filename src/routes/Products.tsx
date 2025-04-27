import { CatalogCard } from '@/features/products/CatalogCard';
import SortFilterModal from '@/components/ui/SortFilterModal';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Product } from '@/types';

export default function Products() {
  const [items, setItems] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const navigateToProductId = useNavigate();

  const handleNavigation = (product: Product) => {
    console.log(product);
      navigateToProductId(`/${product.slug}`, {state: { product },});
  };

  const fetchProducts = async (currentPage: number) => {
    try {
      const req = await fetch(`http://localhost:5001/products`, {
        method: 'GET',
      });
      if (!req.ok) throw new Error('HTTP Exception');
      const data = await req.json();

      if (data?.products && data.products.length > 0) {
        setItems((prevItems) => [...prevItems, ...data.products]);
      } else {
        setHasMore(false);
      }
      console.log('data', data);
    } catch (err: any) {
      console.log(err);
      setHasMore(false);
    } finally {
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchProducts(page);
  }, []);

  const handleLoadMore = () => {
    if (hasMore && !loadingMore) {
      setLoadingMore(true);
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (page > 1) {
      fetchProducts(page);
    }
  }, [page]);

  return (
    <div className="">
      <section className="hero-section">
        <div className="all-products-hero">
          <p className="all-products-hero-logo">All Products</p>
        </div>
      </section>

      <section className="py-8">
        <SortFilterModal />
      </section>

      <section>
        <div className="flex justify-center px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {items.map((product: any,idx) => (
              <div
                key={`${product._id}-${idx}`}
                className="max-w-[375px] w-full cursor-pointer"
                onClick={() => handleNavigation(product)}
              >
                <CatalogCard
                  image={product.productImage}
                  title={product.name}
                  price={product.productPrice}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full py-8 flex justify-center items-center">
        {hasMore ? (
          <button
            className="border-none cursor-pointer bg-[#f9f9f9] py-5 px-12 font-satoshi text-center color-[#2a254b]"
            onClick={handleLoadMore}
            disabled={loadingMore}
          >
            {loadingMore ? 'Loading...' : 'Load More'}
          </button>
        ) : (
          <p>No more products to load.</p>
        )}
      </div>
    </div>
  );
}
