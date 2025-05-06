import type { Product } from '@/types';
import { useState, useEffect } from 'react';
import { ErrorMessage } from '@/components/feedback';
import { sortOptions } from '@/config';

import { useAppDispatch, useAppSelector } from '@/stores/core/hooks';
import { selectIsFilterOpen, selectIsMenuOpen, selectIsModalOpen, selectIsSortOpen, selectResultsNumber } from '@/stores/modal/selectors';
import { openSortFilterModal, openSortFromModal, openFilterFromModal, toggleFilter, toggleSort } from '@/stores/modal/slice';
import { selectProductsError, selectProductsFilters, selectProductsLoading, selectProductsResponse,selectSortOption} from '@/stores/products/selectors';

import { fetchProducts } from '@/stores/products/thunks';
import { useParams } from 'react-router-dom';
import { setSortSelection } from '@/stores/products';


import ProductCard from '@/features/products/ProductCard';
import FilterSortModal from '@/features/filter-sort/FilterSortModal';
import FilterSortBar from '@/features/filter-sort/FilterSortBar';
import ProductSkeleton from '@/features/products/ProductSkeleton';

export default function Category() {
  const dispatch = useAppDispatch();
  const { category } = useParams<{ category: string }>();

  const [filterOption, setFilterOption] = useState<string | null>(null);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  const [itemCount, setItemCount] = useState<number | null>(null);
  const [meta, setMeta] = useState<any | any[]>([]);

  /* Selectors */
  const products = useAppSelector(selectProductsResponse);
  const loading = useAppSelector(selectProductsLoading);
  const error = useAppSelector(selectProductsError);
  const filters = useAppSelector(selectProductsFilters);
  const isModalOpen = useAppSelector(selectIsModalOpen);
  const sortOption =  useAppSelector(selectSortOption);
  const isSortOpen = useAppSelector(selectIsSortOpen);
  const isFilterOpen = useAppSelector(selectIsFilterOpen);
  const resultsNumber = useAppSelector(selectResultsNumber);
  const isMenuOpen = useAppSelector(selectIsMenuOpen);

  /* Actions & Handlers */

  const toggleModal = () => {
    dispatch(openSortFilterModal(false));
  };
  const handleSortChange = (selectedValue: string) => {
    dispatch(setSortSelection(selectedValue))
  };
  const handleShowResults = () => {
    // useProducts(url);
    toggleModal();
  };
  // const handleCategorySelect = (category: string | null) => {
  //   setCurrentCategory(category);
  //   setSortOption(null);
  // };

  const handleFilterChange = ( selectedValue:any ) => {
    dispatch(setSortSelection(selectedValue))
  };


  useEffect(() => {
    dispatch(fetchProducts({ category,sort:'availability' }));
  }, [category]);

  return (
    <div className="w-full min-h-screen bg-white p-6">
      <section>
        <FilterSortBar />
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {loading ? ( <ProductSkeleton /> ) : error ? (   <ErrorMessage message="Error loading products." /> ) : (
          products.products.map((product: any, idx: number) => <ProductCard key={`${product.id}-${idx}`} product={product} />)
        )}
      </section>

      <FilterSortModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        sortOptions={sortOptions}
        onSortChange={handleSortChange}
        sortSelection={sortOption}
        onFilterChange={handleFilterChange}
        filterGroups={filters}
        showAction={handleShowResults}
        itemCount={itemCount}
    />
    </div>
  );
}
