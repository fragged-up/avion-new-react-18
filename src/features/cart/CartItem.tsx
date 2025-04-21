import QuantitySelector from '@/components/ui/QuantitySelector';
import type { CartItem as CartItemT } from '@/types/cart';

type CartItemProps = {
  cartItem:CartItemT
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
};

export default function CartItem({cartItem,onIncrease,onDecrease}: CartItemProps) {
  const { id, image, title, description, price, quantity } = cartItem;

  return (
    <div className="flex justify-start items-start gap-2.5 pr-5">
      <div className="flex">
        <img src={image} alt="cart-item" className="w-full max-w-[100%] h-auto" />
      </div>

      <div className="h-[164px] flex flex-col justify-start items-start gap-4">
        <h2 className="text-[1em] font-clash">{title}</h2>
        <p className="text-[0.8em] font-satoshi font-thin">{description}</p>
        <p className="text-[0.8em] font-satoshi font-thin">{`£ ${price}`}</p>

        <QuantitySelector
          item={cartItem}
          quantity={quantity}
          onIncrease={() => onIncrease(id)}
          onDecrease={() => onDecrease(id)}
        />
      </div>
    </div>
  );
}
