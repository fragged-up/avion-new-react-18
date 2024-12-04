import SFModal from '@/components/modals/SFModal';
import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/products';
import Loading from '@/components/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsThunk } from '@/features/products/thunks';
import { loadMoreProducts } from '@/features/products/productSlice';
import { AppDispatch, RootState } from '@/features/store';

const RealPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { pagination } = useSelector((state: RootState) => state.product);
  const { isFetching, status, data, error } = useSelector(
    (state: RootState) => state.product.thunkStatus,
  );
  const handleLoadMore = () => {
    if (pagination.limit === 284) return;
    dispatch(loadMoreProducts(pagination));
  };

  useEffect(() => {
    dispatch(fetchProductsThunk(pagination));
  }, [dispatch, pagination]);

  if (error === 'error') {
    return <div>Error Fetching Data... {JSON.stringify(error)}</div>;
  }
  return (
    <div className="w-full">
      <div className="py-14">
        <SFModal />
      </div>
      <div>
        {data && (
          <div className="flex justify-center items-center">
            <ProductCard products={data} />;
          </div>
        )}
      </div>
      <div>
        {isFetching ? (
          <div className="py-16">
            <div className="flex justify-center items-center">
              <Loading />
            </div>
          </div>
        ) : (
          <div className="mt-[2.5rem] flex justify-center py-12 md:mt-[3rem]">
            <button
              onClick={handleLoadMore}
              className="rounded-lg bg-[#F9F9F9] px-4 py-2 font-satoshi text-base text-[#2A254B]"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RealPage;

// className="px-2 py-1 text-white hover:bg-slate-500"

// make a new component that fetch all the data from the backend

// 1. new page compoenent the goes catagories .. your category in (App.tsx)
// 2. dont forgot to make a controller in your backend give a function before the (req,res)
// 3. when user click some category all the data of the catagories been sent the this SFModal
// 4. then in SFModal we would know what to render and how much which properties are availabe to use to filter ,,
// 5. to the get category you sending all the data you can already sorted and filter
// like everything you need for the api
// you already did all just what you need to do in the backend is send the number or length of that results
// * wethear is brand results (how much brands in this category)
// * or if its by color how much colors from each color, and what colors are available ...
// * material which materials are available to filter, and how much quantity from the available one's
// * and etc..
// 6. lets start from scretch again we will set the request to :/hategory in the back and the front end !
