import { useState, useEffect } from 'react';
import { Loading, ErrorMessage } from '@/components/feedback';
import { sortOptions } from '@/config';

import { useAppDispatch, useAppSelector } from '@/stores/core/hooks';
import { selectIsFilterOpen, selectIsMenuOpen, selectIsModalOpen, selectIsSortOpen, selectResultsNumber } from '@/stores/modal/selectors';
import { openSortFilterModal, openSortFromModal, openFilterFromModal, toggleFilter, toggleSort } from '@/stores/modal/slice';
import { selectProductsError, selectProductsFilters, selectProductsLoading, selectProductsResponse } from '@/stores/products/selectors';

import ProductCard from '@/features/products/ProductCard';
import FilterSortModal from '@/features/filter-sort/FilterSortModal';
import FilterSortBar from '@/features/filter-sort/FilterSortBar';
import { fetchProducts } from '@/stores/products/thunks';
import type { Product } from '@/types';
import { useNavigate } from 'react-router-dom';
import Hero from '@/sections/Hero';

export default function Products() {
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const dispatch = useAppDispatch();

  const [sortOption, setSortOption] = useState<string | null>(null);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [itemCount, setItemCount] = useState<number | null>(null);
  const [meta, setMeta] = useState<any | any[]>([]);
  const navigateToProductId = useNavigate();

  const handleNavigation = (product: Product) => {
    console.log(product);
    navigateToProductId(`/products/${product.slug}`, { state: { product } });
  };

  /* Selectors */
  const products = useAppSelector(selectProductsResponse);
  const loading = useAppSelector(selectProductsLoading);
  const error = useAppSelector(selectProductsError);
  const filters = useAppSelector(selectProductsFilters);
  const isModalOpen = useAppSelector(selectIsModalOpen);
  const isSortOpen = useAppSelector(selectIsSortOpen);
  const isFilterOpen = useAppSelector(selectIsFilterOpen);
  const resultsNumber = useAppSelector(selectResultsNumber);
  const isMenuOpen = useAppSelector(selectIsMenuOpen);

  /* Actions & Handlers */

  const toggleModal = () => {
    dispatch(openSortFilterModal(false));
  };

  const handleSortChange = (selectedValue: string) => {
    setSortOption(selectedValue);
  };

  const handleShowResults = () => {
    // useProducts(url);
    toggleModal();
  };

  const handleCategorySelect = (category: string | null) => {
    setCurrentCategory(category);
    setSortOption(null);
  };

  useEffect(() => {
    const params = {
      category: 'tables',
    };
    if (products) {
      setMeta(filters);
    }

    dispatch(fetchProducts(params));
  }, []);

  // const handleLoadMore = () => {
  //   if (hasMore && !loadingMore) {
  //     setLoadingMore(true);
  //     fetchProducts({ category: 'tables' });
  //   }
  // };

  return (
    <div className="">
      <Hero />

      <section className="py-8">
        <FilterSortBar />
      </section>

      <FilterSortModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        sortOptions={sortOptions}
        filterGroups={filters}
        sortSelection={sortOption}
        onSortChange={handleSortChange}
        showAction={handleShowResults}
        itemCount={itemCount}
      />
      <main>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {loading ? (
            <Loading message="Loading products..." />
          ) : error ? (
            <ErrorMessage message="Error loading products." />
          ) : (
            products.products.map((product: any, idx: number) => (
              <ProductCard key={`${product.id}-${idx}`} product={product} onClick={() => handleNavigation(product)} />
            ))
          )}
        </section>
        {/* <div className="w-full py-8 flex justify-center items-center">
          {hasMore ? (
            <button
              className="border-none cursor-pointer bg-[#f9f9f9] py-5 px-12 font-satoshi text-center color-[#2a254b]"
              onClick={handleLoadMore}
              disabled={loadingMore}>
              {loadingMore ? 'Loading...' : 'Load More'}
            </button>
          ) : (
            <p>No more products to load.</p>
          )}
        </div> */}
      </main>
    </div>
  );
}
