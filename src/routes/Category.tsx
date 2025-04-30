// import {useEffect, useState} from 'react';
// import {useNavigate, useParams} from 'react-router-dom';
// import SelectDropDown from '@/components/ui/SelectDropDown';
// import SortFilterModal from '@/components/ui/SortFilterModal';
// import {ProductCardTypes} from '@/types/products';
// import { RootState } from '@/stores/core/store';
// import { useSelector } from 'react-redux';

// export default function Category() {
//   const [prs, setProducts] = useState<ProductCardTypes[]>([]);
//   const [offset, setOffset] = useState(0);
//   const {category} = useParams();
//   const navigateToProductId = useNavigate();
//   const initialLimit = 20;
//   const loadMoreLimit = 12;
//   const products = useSelector((state: RootState) => state.products.products);
//  console.log("selectProducts :",products);
//   const handleNavigation = (product: ProductCardTypes) => {
//     if (product.slug) {
//       navigateToProductId(`/${category}/${product.slug}`, {
//         state: {product},
//       });
//     } else {
//       console.warn('No slug found for product:', product);
//     }
//   };

//   const getProductApi = async (offset: number, limit: number) => {
//     try {
//       const url = category
//         ? `http://localhost:5001/products?${category}limit=${limit}&offset=${offset}`
//         : `http://localhost:5001/products`;
//       const request = await fetch(url, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'Application/json',
//         },
//       });
//       const response = await request.json();
//       const productList = response.products || response;
//       setProducts((prev) => (offset === 0 ? products : [...prev, ...productList]));
//       // setProducts((prevProducts) => (offset === 0 ? response.products : [...prevProducts, ...response.products]));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     setProducts([]); // Reset products when category changes
//     setOffset(0); // Reset offset When Category Changes
//     getProductApi(0, initialLimit); // Load first 20 products for the new category
//   }, [category]);

//   const loadMoreProducts = () => {
//     const newOffset = offset + loadMoreLimit;
//     setOffset(newOffset);
//     getProductApi(newOffset, loadMoreLimit); // Fetch 12 more products
//   };

//   return (
//     <>
//       <div className="sort-and-filter-section w-full">
//         <div className="w-[85%] flex items-center mx-auto gap-4 py-12">
//           <SortFilterModal />
//         </div>
//       </div>
//       <div className="flex justify-center">
//         <div className="product-container">
//           {Array.isArray(products) &&
//             products.map((prod: ProductCardTypes | any, index) => (
//               <div
//                 className="product-item"
//                 key={`${category || 'product'}-${prod.id}-${index}-${prod.slug || prod.name}`}
//               >
//                 <div className="inline-flex" onClick={() => handleNavigation(prod)}>
//                   <img className="product-exc-image" src={`${prod.productImage}`} alt={prod.name} loading="lazy" />
//                 </div>

//                 <div className="product-details">
//                   <h1 className="text-wrap font-clash text-xl font-light">{prod.name}</h1>
//                   <h1 className="text-wrap font-satoshi text-xl font-extralight">£{prod.productPrice}</h1>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>

//       {products.length > 0 && (
//         <div className="mt-[2.5rem] flex justify-center py-12 md:mt-[3rem]">
//           <button
//             onClick={loadMoreProducts}
//             className="rounded-lg bg-[#F9F9F9] px-4 py-2 font-satoshi text-base text-[#2A254B]"
//           >
//             View Collection
//           </button>
//         </div>
//       )}
//     </>
//   );
// }

{
  /* <SelectDropDown label={'Sort By'} options={['hey', 'bye', 'lie']} onSelect={handleCloseModal} />
<SelectDropDown label={'category'} options={['hey', 'bye', 'lie']} onSelect={handleCloseModal} />
<SelectDropDown label={'category'} options={['hey', 'bye', 'lie']} onSelect={handleCloseModal} /> */
}
