import type { Product } from '@/types';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/stores/core/hooks';
import { addToCart, decreaseQty, increaseQty, selectCartItemCount } from '@/stores/cart';
import fallbackImage from '@/assets/images/imageNotAvailable.png';
import QuantitySelector from '@/components/ui/QuantitySelector';

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps | any) => {
  const dispatch = useAppDispatch();
  const { productImage, productTitle, productPrice } = product;
  const [ isFallback, setIsFallback] = useState(false);
  const itemCount = useAppSelector(selectCartItemCount);
  let quantity = itemCount || 1;

  const handleIncrease = (id: string) => {
    dispatch(increaseQty(id));
  };

  const handleDecrease = (id: string) => {
    dispatch(decreaseQty(id));
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex md:w-2/4">
        <img
          src={isFallback ? fallbackImage : productImage}
          alt="product-image"
          onError={() => setIsFallback(true)}
          className="w-full h-full object-cover cursor-pointer max-h-[600px]"
          draggable={false}
        />
      </div>

      <div className="flex flex-col md:w-2/4 justify-start items-start px-[1.5em] pt-[2em] gap-[0.6em]">
        <div className="flex flex-col justify-start items-start gap-[1em]">
          <h1 className="text-[1em] font-clash font-normal">{productTitle}</h1>
          <h1 className="text-[1.2em] font-clash font-normal">{`£ ${productPrice}`}</h1>
        </div>

        <div className="flex flex-col justify-start items-start gap-4 py-[1.5em]">
          <h2 className="text-[1em] font-clash font-normal">Product description</h2>
          <p className="text-[1em] font-regular font-clash">{product?.productDescription?.main}</p>
          <ul className="pl-[2em]">
            <li className="list-disc font-clash text-[0.9em]">{product?.productDescription?.descOne}</li>
            <li className="list-disc font-clash text-[0.9em]">{product?.productDescription?.descTwo}</li>
            <li className="list-disc font-clash text-[0.9em]">{product.productDescription?.descThree}</li>
          </ul>
        </div>

        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h1 className="text-[1em] font-clash font-normal">Dimensions</h1>

          <div className="w-full flex justify-start items-start">
            <div className="w-full flex flex-col justify-start items-start border-none py-[5px] gap-[0.5em]">
              <p className="text-center text-[1em] font-clash font-normal">Height</p>
              <p className="font-satoshi text-[0.8em] text-center font-normal">{product.productDimensions?.height}cm</p>
            </div>

            <div className="w-full flex flex-col justify-start items-start border-none py-[5px] gap-[0.5em] border-l border-[#ebe8f4] pl-[0.5em]">
              <p className="text-center text-[1em] font-clash font-normal">Width</p>
              <p className="font-satoshi text-[0.8em] text-center font-normal">{product.productDimensions?.weight}cm</p>
            </div>

            <div className="w-full flex flex-col justify-start items-start border-none py-[5px] gap-[0.5em] border-l border-[#ebe8f4] pl-[0.5em]">
              <p className="text-center text-[1em] font-clash font-normal">Depth</p>
              <p className="font-satoshi text-[0.8em] text-center font-normal">{product.productDimensions?.depth}cm</p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-[1.5em] mt-auto ">
          <div className="">
            <h2 className="font-clash text-[1em]">Quantity</h2>
          </div>

          <QuantitySelector
            item={product}
            quantity={quantity}
            onInc={() => handleIncrease(product._id)}
            onDec={() => handleDecrease(product._id)}
          />
          <div className="w-full">
            <button
              className="w-full bg-[#2a254b] border-none cursor-pointer py-[1em] text-[0.8em] font-satoshi font-normal text-center text-[#f9f9f9]"
              onClick={() => dispatch(addToCart(product))}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
