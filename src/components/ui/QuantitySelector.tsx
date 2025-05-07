import type { CartItem as CartItemT } from '@/types/cart';
import { useState } from 'react';

type QuantityProps = {
  item:any | any[]
  quantity: number;
  onInc: (item:string | number) => void;
  onDec: (item:string | number) => void;
};



export default function QuantitySelector({ item,quantity, onInc, onDec }: QuantityProps) {


  return (
    <div className="bg-[#f9f9f9] flex justify-center items-center gap-[30px] px-5 py-[5px] border-black">
      <button onClick={()=>onDec(item._id)} className="text-[#ebe8f4] bg-transparent appearance-none">-</button>
      <h2 className="font-satoshi">{quantity}</h2>
      <button onClick={()=>onInc(item._id)} className="text-[#ebe8f4] bg-transparent appearance-none">+</button>
    </div>
  );
}

// .product-quantity-c {
//   background-color: #f9f9f9;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 30px;
//   padding-inline: 20px;
//   padding-block: 5px;
// }

// .product-number {
//   font-family: var(--font-satoshi-family);
//   font-weight: var(--font-wght-regular);
// }

// .product-quantity-subtract,
// .product-quantity-add {
//   color: #ebe8f4;
//   background-color: transparent;
//   appearance: none;
// }
