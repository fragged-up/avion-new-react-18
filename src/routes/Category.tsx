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
import { Container, Main, Section } from '@/components/ui/Semantic';


import ProductCard from '@/features/products/ProductCard';
import FilterSortModal from '@/features/filter-sort/FilterSortModal';
import FilterSortBar from '@/features/filter-sort/FilterSortBar';
import ProductSkeleton from '@/features/products/ProductSkeleton';
import Button from '@/components/ui/Button';

export default function Category() {
  const dispatch = useAppDispatch();
  const { category } = useParams<{ category: string }>();
  const [itemCount, setItemCount] = useState<number | null>(null);
  const [meta, setMeta] = useState<any | any[]>([]);

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


  const toggleModal = () => dispatch(openSortFilterModal(false));
  const handleShowResults = () => toggleModal();
  const handleSortChange = (selectedVal: string) => dispatch(setSortSelection(selectedVal))
  const handleFilterChange = ( selectedVal:any ) => dispatch(setSortSelection(selectedVal))


  useEffect(() => {
    dispatch(fetchProducts({ category,sort:'availability' }));
  }, [category]);

  return (
    <Main className="w-full min-h-screen bg-white p-6">
      <Section>
        <FilterSortBar />
      </Section>

      <Section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {loading ? ( <ProductSkeleton /> ) : error ? (   <ErrorMessage message="Error loading products." /> ) : (
          products.products.map((product: any, idx: number) => <ProductCard key={`${product.id}-${idx}`} product={product} />)
        )}
      </Section>

         <Container className='flex justify-center items-center py-12'>
          <Button className='text-center py-4 font-clash text-xl cursor-pointer px-8'>Load More</Button>
         </Container>

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
    </Main>
  );
}
