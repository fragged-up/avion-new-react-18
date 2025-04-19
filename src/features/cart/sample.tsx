// import { useEffect, useState } from "react";
// // @ts-ignore
// const Cart = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const cartData = JSON.parse(localStorage.getItem("cartItems"));
//     setProducts(cartData);
//   }, []);

//   const increaseQty = (id) => {
//     const updateProducts = products.map((item) => {
//       if (item.id === id) {
//         return { ...item, quantity: item.quantity + 1 };
//       }
//       return item;
//     });
//     setProducts(updateProducts);
//     localStorage.setItem("cartItems", JSON.stringify(updateProducts));
//   };

//   const decreaseQty = (id) => {
//     const updateProducts = products.map((item) => {
//       if (item.id === id && item.quantity > 1) {
//         return { ...item, quantity: item.quantity - 1 };
//       }
//       return item;
//     });
//     setProducts(updateProducts);
//     localStorage.setItem("cartItems", JSON.stringify(updateProducts));
//   };

//   const removeCarthandler = (id) => {
//     const confirmed = window.confirm(
//       "Are you sure you want to delete this item from the cart?"
//     );
//     if (confirmed) {
//       const filterCart = products.filter((item) => item.id !== id);
//       localStorage.setItem("cartItems", JSON.stringify(filterCart));
//       setProducts(filterCart);
//       toast.success("Product is removed from the cart");
//     }
//   };

//   return (
//     <>
//       <ToastContainer theme="colored" position="top-center" />
//       <div className="container">
//         {/* Cart rendering logic */}
//       </div>
//     </>
//   );
// };
