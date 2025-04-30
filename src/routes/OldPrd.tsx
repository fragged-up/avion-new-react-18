// import { useLocation } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import type { ProductDetails as ProductIdProps } from '@/types';
// import WhatsMake from '@/sections/WhatsMake';
// import ProductDetails from '@/features/products/ProductDetails';
// import RecommendedProducts from '@/features/products/RecommendedProducts';

// export default function Products() {
//   const url = `http://localhost:5001/products`;
//   const location = useLocation();
//   const loca = location.pathname;
//   const product = location.state?.product as ProductIdProps;
//   const [allProducts, setAllProducts] = useState<ProductIdProps[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const req = await fetch(url);
//         if (!req.ok) throw new Error('Http Exception ..');
//         const res = await req.json();
//         setAllProducts(res);
//       } catch (err: any) {
//         console.log(err);
//       }
//     };
//     fetchProducts();
//   }, []);

//   if (!allProducts) {
//     return <p>Product not found.</p>;
//   }

//   return (
//     <div className="w-full bg-white">
//       <div className="w-full">
//         <ProductDetails />
//       </div>

//       {allProducts.length > 0 && (
//         <div className="w-full py-8">
//           <RecommendedProducts currentProduct={product} allProducts={allProducts} />
//         </div>
//       )}
//       <div className="whats-make-container">
//         <WhatsMake />
//       </div>
//     </div>
//   );
// }
