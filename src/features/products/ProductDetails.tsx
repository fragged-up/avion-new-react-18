// import type { ProductCard as Product } from '@/types';
// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { useAppDispatch, useAppSelector } from '@/stores/core/hooks';
// import { fetchProductById } from '@/stores/products';
// import { RootState } from '@/stores/core/store';

// export default function ProductDetails() {
//   const { id } = useParams<{ id: string }>();
//   const dispatch = useAppDispatch();
//   const cachedProduct = useAppSelector((state:RootState) => state.products.items.find((p: any) => p.id === id),

//   );

//   const [product, setProduct] = useState<Product | null>(cachedProduct ?? null);

//   useEffect(() => {
//     if (!product && id) {
//       dispatch(fetchProductById(id))
//         .unwrap()
//         .then((data) => setProduct(data))
//         .catch((err) => console.error('Failed to fetch product:', err));
//     }
//   }, [dispatch, id, product]);

//   if (!product) return <div>Loading...</div>;
//   return (
//     <div className="product-id-container">
//       <section className="image-id-section">
//         <img src={product.productImage} alt={product.name} />
//       </section>

//       <section className="details-id-section">
//         <div className="details-id-wrapper">
//           <div className="mt-[1.75rem] flex flex-col gap-[.8rem]">
//             <p className="font-clash text-2xl font-normal text-[#2A254B]">{product.name}</p>
//             <p className="font-clash text-xl font-normal text-[#2A254B]">£{product.productPrice}</p>
//           </div>

//           <div className="product-description">
//             <div className="flex flex-col gap-[1em] py-[1.5em]">
//               <h2 className="font-clash text-base font-normal text-[#2A254B]">
//                 Product Description
//               </h2>
//               <p className="font-satoshi font-normal text-[#2A254B] text-[1.em]">
//                 {product.productDescription?.main}
//               </p>
//               <ul className="description-list-container">
//                 <li className="description-list">{product.productDescription?.descOne}</li>
//                 <li className="description-list">{product.productDescription?.descTwo}</li>
//                 <li className="description-list">{product.productDescription?.descThree}</li>
//               </ul>
//             </div>

//             <div className="flex flex-col gap-[1em]">
//               <p className="font-clash text-base font-normal text-[#2A254B]">Dimensions</p>

//               <div className="dimensions-group text-center">
//                 <div className="dimensions-item">
//                   <p className="font-clash text-sm font-normal text-[#2A254B]">Height</p>
//                   <p className="font-satoshi text-sm font-normal text-[#2A254B]">
//                     {product.productDimensions?.height}
//                   </p>
//                 </div>

//                 <div className="dimensions-item">
//                   <p className="font-clash text-sm font-normal text-[#2A254B]">Weight</p>
//                   <p className="font-satoshi text-sm font-normal text-[#2A254B]">
//                     {product.productDimensions?.weight}
//                   </p>
//                 </div>

//                 <div className="dimensions-item">
//                   <p className="font-clash text-sm font-normal text-[#2A254B]">Depth</p>
//                   <p className="font-satoshi text-sm font-normal text-[#2A254B]">
//                     {product.productDimensions?.depth}
//                   </p>
//                 </div>
//               </div>

//               <div className="quantity flex w-full flex-col gap-[1em] py-[1.5em] md:pb-0 md:pt-[3em]">
//                 <p className="text-normal font-clash text-base text-[#2A254B]">Quantity</p>
//                 <button className="bg-[#f9f9f9] p-3.5 text-center font-satoshi text-base font-normal text-[#2A254B]">
//                   1
//                 </button>
//                 <button className="bg-[#2A254B] p-3.5 text-center font-satoshi text-base font-normal text-white">
//                   Add to cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import inspectImage from '@/assets/images/Inspect-image.svg';
import CatalogDataContainer from '@/features/products/CatalogData';
import Unique from '@/sections/UniqueSection';
import QuantitySelector from '@/components/ui/QuantitySelector';
import { useAppDispatch, useAppSelector } from '@/stores/core/hooks';
import { addToCart, decreaseQty, increaseQty, selectProductQuantity } from '@/stores/cart';

type ProductId = {
  id: number;
  title: string;
  price: string;
  description: string;
  features: {
    material: string;
    craftsmanship: string;
    quality: string;
  };
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
};

type ProductDetailsProps = {
  product: ProductId;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { title, price, description, features, dimensions } = product;
  const { height, width, depth } = dimensions;

  const dispatch = useAppDispatch();
  const handleIncrease = () => {
    dispatch(increaseQty(product.id)); // You can update the quantity in the store
  };

  const handleDecrease = () => {
    dispatch(decreaseQty(product.id)); // You can update the quantity in the store
  };
  const quantity = useAppSelector((state) =>
    selectProductQuantity(state, product.id)
  );

  const handleAddToCart = (product:any) => {
    dispatch(addToCart(product.id));
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex md:w-2/4">
        <img
          src={inspectImage}
          alt="product-image"
          className="w-full h-full object-cover cursor-pointer"
        />
      </div>

      <div className="flex flex-col md:w-2/4  justify-start items-start px-[1.5em] py-[2em] gap-[0.6em]">
        <div className="flex flex-col justify-start items-start gap-[1em]">
          <h1 className="text-[1em] font-clash font-normal">{title}</h1>
          <h1 className="text-[1.2em] font-clash font-normal">{`£ ${price}`}</h1>
        </div>

        <div className="flex flex-col justify-start items-start gap-4 py-[1.5em]">
          <h2 className="text-[1em] font-clash font-normal">Product description</h2>
          <p className="text-[1em] font-regular font-clash">{description}</p>
          <ul className="pl-[2em]">
            <li className="list-disc font-clash text-[0.9em]">{features.material}</li>
            <li className="list-disc font-clash text-[0.9em]">{features.craftsmanship}</li>
            <li className="list-disc font-clash text-[0.9em]">{features.quality}</li>
          </ul>
        </div>

        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h1 className="text-[1em] font-clash font-normal">Dimensions</h1>

          <div className="w-full flex justify-start items-start">
            <div className="w-full flex flex-col justify-start items-start border-none py-[5px] gap-[0.5em]">
              <p className="text-center text-[1em] font-clash font-normal">Height</p>
              <p className="font-satoshi text-[0.8em] text-center font-normal">{height}cm</p>
            </div>

            <div className="w-full flex flex-col justify-start items-start border-none py-[5px] gap-[0.5em] border-l border-[#ebe8f4] pl-[0.5em]">
              <p className="text-center text-[1em] font-clash font-normal">Width</p>
              <p className="font-satoshi text-[0.8em] text-center font-normal">{width}cm</p>
            </div>

            <div className="w-full flex flex-col justify-start items-start border-none py-[5px] gap-[0.5em] border-l border-[#ebe8f4] pl-[0.5em]">
              <p className="text-center text-[1em] font-clash font-normal">Depth</p>
              <p className="font-satoshi text-[0.8em] text-center font-normal">{depth}cm</p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-[1.5em] py-[1.5em]">
          <div className="">
            <h2 className="font-clash text-[1em]">Quantity</h2>
          </div>

          <div className="bg-[#f9f9f9] flex justify-center items-center gap-[30px] px-5 py-[5px] border-black">
           <button onClick={()=>handleDecrease} className="text-[#ebe8f4] bg-transparent appearance-none">-</button>
           <h2 className="font-satoshi">{quantity}</h2>
           <button onClick={()=>handleIncrease} className="text-[#ebe8f4] bg-transparent appearance-none">+</button>
          </div>
          <div className="w-full">
            <button className="w-full bg-[#2a254b] border-none cursor-pointer py-[1em] text-[0.8em] font-satoshi font-normal text-center text-[#f9f9f9]">
              Add to cart
            </button>
          </div>
        </div>

        {/* <CatalogDataContainer /> */}

        {/* <Unique /> */}
      </div>
    </div>
  );
};

export default ProductDetails;

{
  /* <QuantitySelector
:product-id="props.selectedProduct.id"
:quantity="cartStore.cartItems.find(item => item.id === selectedProduct.id)?.quantity ?? 1"
:addQuantity="increaseQuantity"
:removeQuantity="decreaseQuantity"
:add-class="'px-6 md:text-start'"
/> */
}


