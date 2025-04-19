
type QuantityProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};



export default function QuantitySelector({ quantity, onIncrease, onDecrease }: QuantityProps) {
  return (
    <div className="bg-[#f9f9f9] flex justify-center items-center gap-[30px] px-5 py-1.5 border-black">
      <button onClick={onDecrease} className="text-[#ebe8f4] bg-transparent appearance-none">-</button>
      <h2 className="font-satoshi">{quantity}</h2>
      <button  onClick={onIncrease} className="text-[#ebe8f4] bg-transparent appearance-none">+</button>
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
