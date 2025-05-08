// import { useState, useEffect } from 'react';
// import { ErrorMessage } from '@/components/feedback';
// import { sortOptions } from '@/config';

// import { useAppDispatch, useAppSelector } from '@/stores/core/hooks';
// import { selectIsFilterOpen, selectIsMenuOpen, selectIsModalOpen, selectIsSortOpen, selectResultsNumber } from '@/stores/modal/selectors';
// import { openSortFilterModal, openSortFromModal, openFilterFromModal, toggleFilter, toggleSort } from '@/stores/modal/slice';
// import { selectProductsError, selectProductsFilters, selectProductsLoading, selectProductsResponse,selectSortOption} from '@/stores/products/selectors';

// import { fetchProducts } from '@/stores/products/thunks';
// import { useParams } from 'react-router-dom';
// import { setSortSelection } from '@/stores/products';
// import { Container, Main, Section } from '@/components/ui/Semantic';


// import ProductCard from '@/features/products/ProductCard';
// import FilterSortModal from '@/features/filter-sort/FilterSortModal';
// import FilterSortBar from '@/features/filter-sort/FilterSortBar';
// import ProductSkeleton from '@/features/products/ProductSkeleton';
// import Button from '@/components/ui/Button';

// export default function Category() {
//   const dispatch = useAppDispatch();
//   const { category } = useParams<{ category: string }>();
//   const [itemCount, setItemCount] = useState<number | null>(null);
//   const [page, setPage] = useState(1);

//   const products = useAppSelector(selectProductsResponse);
//   const loading = useAppSelector(selectProductsLoading);
//   const error = useAppSelector(selectProductsError);
//   const filters = useAppSelector(selectProductsFilters);
//   const isModalOpen = useAppSelector(selectIsModalOpen);
//   const sortOption =  useAppSelector(selectSortOption);
//   const isSortOpen = useAppSelector(selectIsSortOpen);
//   const isFilterOpen = useAppSelector(selectIsFilterOpen);
//   const resultsNumber = useAppSelector(selectResultsNumber);
//   const isMenuOpen = useAppSelector(selectIsMenuOpen);


//   const toggleModal = () => dispatch(openSortFilterModal(false));
//   const handleShowResults = () => toggleModal();
//   const handleSortChange = (selectedVal: string) => dispatch(setSortSelection(selectedVal))
//   const handleFilterChange = ( selectedVal:any ) => dispatch(setSortSelection(selectedVal))



//   const handleLoadMore = () => {
//     const nextPage = page + 1;
//     setPage(nextPage);
//     dispatch(fetchProducts({ category, sort: 'availability', page: nextPage }));
//   };

//   const handleFiltersChange = (filters: { [category: string]: string[] }) => {
//     const queryFilters = Object.entries(filters)
//       .map(([key, values]) => values.map((val) => `${key}=${val}`).join('&'))
//       .join('&');

//     dispatch(fetchProducts({
//       category,
//       sort: 'availability',
//       page: 1,
//       filters: queryFilters,
//     }));
//     setPage(1);
//   };







//   // const fetchWithParams = useCallback(() => {
//   //   const filterQuery = Object.entries(selectedFilters)
//   //     .map(([k, v]) => v.map(val => `${k}=${val}`).join('&'))
//   //     .join('&');

//   //   dispatch(fetchProducts({
//   //     category,
//   //     sort: localSort,
//   //     page: 1,
//   //     filters: filterQuery,
//   //   }));
//   // }, [category, localSort, selectedFilters]);





//   // fetchProducts({
//   //   category?: string;
//   //   sort?: string;
//   //   page?: number;
//   //   limit?: number;
//   //   filters?: string;
//   // })
//   const debouncedFilterChange = useDebouncedCallback(handleFiltersChange, 300);

//   // useEffect(() => {
//   //   fetchWithParams();
//   // }, [fetchWithParams]);





//   useEffect(() => {
//     dispatch(fetchProducts({ category,sort:'availability' }));
//   }, [category]);

//   return (
//     <Main className="w-full min-h-screen bg-white p-6">
//       <Section>
//         <FilterSortBar />
//       </Section>

//       <Section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
//         {loading ? ( <ProductSkeleton /> ) : error ? (   <ErrorMessage message="Error loading products." /> ) : (
//           products.products.map((product: any, idx: number) => <ProductCard key={`${product.id}-${idx}`} product={product} />)
//         )}
//       </Section>

//       <Container className="flex justify-center items-center py-12">
//         <Button
//           className="text-center py-4 font-clash text-xl cursor-pointer px-8"
//           onClick={handleLoadMore}
//           disabled={loading}
//         >
//           {loading ? 'Loading...' : 'Load More'}
//         </Button>
//       </Container>

//       <FilterSortModal
//         isOpen={isModalOpen}
//         onClose={toggleModal}
//         sortOptions={sortOptions}
//         onSortChange={handleSortChange}
//         sortSelection={sortOption}
//         onFilterChange={handleFilterChange}
//         filterGroups={filters}
//         showAction={handleShowResults}
//         itemCount={itemCount}
//     />

// {/*
// <FilterSortModal
//   isOpen={isModalOpen}
//   onClose={toggleModal}
//   sortOptions={sortOptions}
//   sortSelection={localSort}
//   onSortChange={(val) => setLocalSort(val)}
//   onFilterChange={(filters) => setSelectedFilters(filters)}
//   filterGroups={filters}
//   itemCount={itemCount}
//   showAction={handleShowResults}
// /> */}







//     </Main>
//   );
// }
// function useDebouncedCallback(handleFiltersChange: (filters: { [category: string]: string[]; }) => void, arg1: number) {
//   throw new Error('Function not implemented.');
// }


import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { ErrorMessage } from '@/components/feedback';
import { sortOptions } from '@/config';
import { Container, Main, Section } from '@/components/ui/Semantic';
import Button from '@/components/ui/Button';

import ProductCard from '@/features/products/ProductCard';
import FilterSortModal from '@/features/filter-sort/FilterSortModal';
import FilterSortBar from '@/features/filter-sort/FilterSortBar';
import ProductSkeleton from '@/features/products/ProductSkeleton';

import { useAppDispatch, useAppSelector } from '@/stores/core/hooks';
import {
  selectIsFilterOpen,
  selectIsMenuOpen,
  selectIsModalOpen,
  selectIsSortOpen,
  selectResultsNumber,
} from '@/stores/modal/selectors';
import {
  openSortFilterModal,
} from '@/stores/modal/slice';
import {
  selectProductsError,
  selectProductsFilters,
  selectProductsLoading,
  selectProductsResponse,
  selectSortOption,
} from '@/stores/products/selectors';
import { fetchProducts } from '@/stores/products/thunks';

export default function Category() {
  const dispatch = useAppDispatch();
  const { category } = useParams<{ category: string }>();

  const [localSort, setLocalSort] = useState<string>('availability');
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});
  const [page, setPage] = useState(1);

  const products = useAppSelector(selectProductsResponse);
  const loading = useAppSelector(selectProductsLoading);
  const error = useAppSelector(selectProductsError);
  const filters = useAppSelector(selectProductsFilters);
  const isModalOpen = useAppSelector(selectIsModalOpen);
  const isMenuOpen = useAppSelector(selectIsMenuOpen);
  const resultsNumber = useAppSelector(selectResultsNumber);

  const toggleModal = () => dispatch(openSortFilterModal(false));

  const fetchWithParams = useCallback(() => {
    const filterQuery = Object.entries(selectedFilters)
      .map(([key, values]) => values.map(val => `${key}=${val}`).join('&'))
      .join('&');

    dispatch(fetchProducts({
      category,
      sort: localSort,
      page: 1,
      filters: filterQuery,
    }));
    setPage(1);
  }, [dispatch, category, localSort, selectedFilters]);

  useEffect(() => {
    fetchWithParams();
  }, [fetchWithParams]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    const filterQuery = Object.entries(selectedFilters)
      .map(([key, values]) => values.map(val => `${key}=${val}`).join('&'))
      .join('&');

    dispatch(fetchProducts({
      category,
      sort: localSort,
      page: nextPage,
      filters: filterQuery,
      append: true,
    }));
    setPage(nextPage);
  };

  return (
    <Main className="w-full min-h-screen bg-white p-6">
      <Section>
        <FilterSortBar />
      </Section>

      <Section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {loading
          ? <ProductSkeleton />
          : error
            ? <ErrorMessage message="Error loading products." />
            : products.products.map((product: any, idx: number) => (
              <ProductCard key={`${product.id}-${idx}`} product={product} />
            ))}
      </Section>

      {products.products.length < (products.total ?? 0) && (
           <Container className="flex justify-center items-center py-12">
             <Button onClick={handleLoadMore} className="text-center py-4 font-clash text-xl cursor-pointer px-8">
               Load More
             </Button>
           </Container>
         )}


      <FilterSortModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        sortOptions={sortOptions}
        filterGroups={filters}
        onSortChange={setLocalSort}
        onFilterChange={(filtersObj) => setSelectedFilters(filtersObj)}
        sortSelection={localSort}
        itemCount={resultsNumber}
      />
    </Main>
  );
}
