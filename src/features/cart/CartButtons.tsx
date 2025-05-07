import { toggleCart } from '@/stores/cart';
import { useAppDispatch } from '@/stores/core/hooks';

type CartBtnProps = {
  total: number | string;
  onClick?: () => void;
};

export const CloseCartButton: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <button onClick={() => dispatch(toggleCart())} className="absolute top-4 right-4 text-2xl font-bold">
      &times;
    </button>
  );
};

export const CheckOutButton: React.FC<CartBtnProps> = ({ total, onClick }) => {
  return (
    <div className=" flex flex-col gap-4">
      <div className="border-t border-[#ebe8f4] pt-[1em] gap-4 flex justify-end items-end">
        <h1 className="flex text-[1em] font-clash font-normal text-[#4e4d93]">Subtotal</h1>
        <span className="text-[1em] font-clash font-normal">£{total}</span>
      </div>
      <p className="text-[0.8em] font-satoshi font-normal text-[#4e4d93] self-end">Taxes and shipping are calculated at checkout</p>
      <div className="flex justfy-end self-end">
        <button
          className="px-12 bg-[#2a254b] border-none cursor-pointer py-[1em] text-[0.8em] font-satoshi text-center text-[#f9f9f9]"
          onClick={onClick}>
          Go to Checkout
        </button>
      </div>
    </div>
  );
};
