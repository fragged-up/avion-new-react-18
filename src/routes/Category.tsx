import { useState, useEffect } from 'react';
import { ErrorMessage } from '@/components/feedback';
import { sortOptions } from '@/config';

import { useAppDispatch, useAppSelector } from '@/stores/core/hooks';
import { selectIsFilterOpen, selectIsMenuOpen, selectIsModalOpen, selectIsSortOpen, selectResultsNumber } from '@/stores/modal/selectors';
import { openSortFilterModal, openSortFromModal, openFilterFromModal, toggleFilter, toggleSort } from '@/stores/modal/slice';
import { selectProductsError, selectProductsFilters, selectProductsLoading, selectProductsResponse } from '@/stores/products/selectors';

import type { Product } from '@/types';
import { fetchProducts } from '@/stores/products/thunks';
import { useParams } from 'react-router-dom';

import ProductCard from '@/features/products/ProductCard';
import FilterSortModal from '@/features/filter-sort/FilterSortModal';
import FilterSortBar from '@/features/filter-sort/FilterSortBar';
import ProductSkeleton from '@/features/products/ProductSkeleton';

export default function Category() {
  const dispatch = useAppDispatch();
  const { category } = useParams<{ category: string }>();

  const [sortOption, setSortOption] = useState<string | null>(null);

  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  const [itemCount, setItemCount] = useState<number | null>(null);
  const [meta, setMeta] = useState<any | any[]>([]);

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
    dispatch(fetchProducts({ category }));
  }, [category]);

  return (
    <div className="w-full min-h-screen bg-white p-6">
      <section>
        <FilterSortBar />
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {loading ? (    <ProductSkeleton /> ) : error ? (   <ErrorMessage message="Error loading products." /> ) : (
          products.products.map((product: any, idx: number) => <ProductCard key={`${product.id}-${idx}`} product={product} />)
        )}
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
    </div>
  );
}
