import SFModal from '@/components/modals/SFModal';
import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/products';
import { useInitProducts } from '@/hooks/useInitProducts';

const Finit = () => {
  // const [items, setItems] = useState<Product[] | any>([]);

  // const result = useInitProducts();
  const { handleLoadMore, items } = useInitProducts();
  return (
    <div className="w-full">
      <div className="">
        <SFModal />
      </div>
      <div>
        <ProductCard products={items} />
      </div>
      <div className="mt-[2.5rem] flex justify-center py-12 md:mt-[3rem]">
        <button
          onClick={handleLoadMore}
          className="rounded-lg bg-[#F9F9F9] px-4 py-2 font-satoshi text-base text-[#2A254B]"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Finit;

// className="px-2 py-1 text-white hover:bg-slate-500"

// make a new component that fetch all the data from the backend

// 1. new page compoenent the goes catagories .. your category in (App.tsx)
// 2. dont forgot to make a controller in your backend give a function before the (req,res)
// 3. when user click some category all the data of the catagories been sent the this SFfModal
// 4. then in SFModal we would know what to render and how much which properties are availabe to use to filter ,,
// 5. to the get category you sending all the data you can already sorted and filter
// like everything you need for the api
// you already did all just what you need to do in the backend is send the number or length of that results
// * wethear is brand results (how much brands in this category)
// * or if its by color how much colors from each color, and what colors are available ...
// * material which materials are available to filter, and how much quantity from the available one's
// * and etc..
// 6. lets start from scretch again we will set the request to :/hategory in the back and the front end !
