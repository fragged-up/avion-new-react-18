import { useState, useEffect } from 'react';
import { Loading, ErrorMessage } from '@/components/feedback';
import { sortOptions } from '@/config';
import { filterOptions } from '@/config/filterOptions';

import { useAppDispatch, useAppSelector } from '@/stores/core/hooks';
import { selectIsFilterOpen, selectIsMenuOpen, selectIsModalOpen, selectIsSortOpen, selectResultsNumber } from '@/stores/modal/selectors';
import { openSortFilterModal, openSortFromModal, openFilterFromModal, toggleFilter, toggleSort } from '@/stores/modal/slice';
import { selectProductsError, selectProductsFilters, selectProductsLoading, selectProductsResponse } from '@/stores/products/selectors';

import ProductCard from '@/features/products/ProductCard';
import FilterSortModal from '@/features/filter-sort/FilterSortModal';
import FilterSortBar from '@/features/filter-sort/FilterSortBar';
import { fetchProducts } from '@/stores/products/thunks';

export default function Test() {
  const dispatch = useAppDispatch();

  const [sortOption, setSortOption] = useState<string | null>(null);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [itemCount, setItemCount] = useState<number | null>(null);
  const [meta,setMeta] = useState<any| any[]>([])

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
    if(products){
      setMeta((filters))
    }

    dispatch(fetchProducts(params));
  }, []);

  return (
    <div className="w-full min-h-screen bg-white p-6">
      <FilterSortBar />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {loading ? (  <Loading message="Loading products..." />) : error ? (<ErrorMessage message="Error loading products." />) :
         (products.products.map((product: any, idx: number) => <ProductCard key={`${product.id}-${idx}`} product={product} />)
        )}
      </div>

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
