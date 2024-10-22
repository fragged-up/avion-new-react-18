// const getProductApi = async (limit: number) => {
//   try {
//     setLoading(true);
//     const url = category
//       ? `http://localhost:5001/${category}?start=${products.length}&limit=${limit}`
//       : `http://localhost:5001/products?start=${products.length}&limit=${limit}`;
//     const request = await fetch(url, {
//       method: "GET",
//     });
//     const response = await request.json();

//     if (response.products.length === 0) {
//       return; // אין יותר מוצרים לטעון
//     }

//     setProducts((prevProducts) => [...prevProducts, ...response.products]);
//     setVisibleCount((prevCount) => prevCount + response.products.length); // עדכן את מספר המוצרים שמוצגים בהתאם לכמות שחוזרת מהשרת
//   } catch (err) {
//     console.error(err);
//   } finally {
//     setLoading(false);
//   }
// };

// useEffect(() => {
//   getProductApi(20); // טוען 20 מוצרים בתחילה
// }, [category]);

// const getProductApi = async (limit: number) => {
//   try {
//     const url = category
//       ? `http://localhost:5001/${category}?limit=${limit}`
//       : `http://localhost:5001/products?limit=${limit}`;
//     const request = await fetch(url, {
//       method: "GET",
//     });
//     const response = await request.json();

//     if (response.products.length === 0) {
//       return; // אין יותר מוצרים לטעון
//     }

//     setProducts((prevProducts) => [...prevProducts, ...response.products]);
//   } catch (err) {
//     console.error(err);
//   }
// };

// useEffect(() => {
//   getProductApi(20); // טוען 20 מוצרים בתחילה
// }, [category]);

// const loadMoreProducts = () => {
//   getProductApi(12); // טוען עוד 12 מוצרים בכל לחיצה
// };

//SAFETY COPY :

// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// interface Product {
//   id: number;
//   name: string;
//   slug?: string;
//   productImage: string;
//   productPrice: number;
// }

// export default function MaintancePage() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [visibleCount, setVisibleCount] = useState(20);
//   const { category } = useParams();
//   const navigateToProductId = useNavigate();
//   const handleNavigation = (product: Product) => {
//     if (product.slug) {
//       navigateToProductId(`/${category}/${product.slug}`, {
//         state: { product },
//       });
//     } else {
//       console.warn("No slug found for product:", product);
//     }
//   };
//   const getProductApi = async () => {
//     try {
//       const url = category
//         ? `http://localhost:5001/${category}`
//         : `http://localhost:5001/products`;
//       const request = await fetch(url, {
//         method: "GET",
//       });
//       const response = await request.json();
//       setProducts(response.products);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     getProductApi();
//   }, [category]);

//   const loadMoreProducts = () => {
//     setVisibleCount((prevCount) => prevCount + 12);
//   };

//   return (
//     <section className="mx-auto w-[90%]">
//       <div className="w-auto">
//         <div className="product-container">
//           {products.slice(0, visibleCount).map((prod: Product) => (
//             <div className="product-item" key={prod.id}>
//               <div
//                 className="product-exc-image flex"
//                 onClick={() => handleNavigation(prod)}
//               >
//                 <img
//                   className="product-exc-image"
//                   src={prod.productImage}
//                   alt={prod.name}
//                   loading="lazy"
//                 />
//               </div>
//               <div className="product-details">
//                 <h1 className="font-clash text-xl font-light">{prod.name}</h1>
//                 <h1 className="font-satoshi text-xl font-extralight">
//                   £{prod.productPrice}
//                 </h1>
//               </div>
//             </div>
//           ))}
//         </div>
//         {visibleCount < products.length && (
//           <div className="mt-[2.5rem] flex justify-center py-12 md:mt-[3rem]">
//             <button
//               onClick={loadMoreProducts}
//               className="rounded-lg bg-[#F9F9F9] px-4 py-2 font-satoshi text-base text-[#2A254B]"
//             >
//               View Collection
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
