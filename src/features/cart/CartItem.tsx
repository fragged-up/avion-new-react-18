import QuantitySelector from '@/components/ui/QuantitySelector';
import type { CartItem as CartItemT } from '@/types/cart';
import type { Product } from '@/types';

type CartItemProps = {
  cartItem:any | any[]
  onIncrease: (id: string ) => void;
  onDecrease: (id: string ) => void;
};

export default function CartItem({cartItem,onIncrease,onDecrease}: CartItemProps) {
  const { _id, productImage, name,  productPrice } = cartItem;
  let quantity = cartItem.quantity || 1;


  return (
    <div className="flex justify-start items-start gap-2.5 pr-5">
      <div className="flex">
        <img src={productImage} alt="cart-item" className="w-full max-w-[100%] h-auto" />
      </div>

      <div className="h-[164px] flex flex-col justify-start items-start gap-4">
        <h2 className="text-[1em] font-clash">{name}</h2>
        <p className="text-[0.8em] font-satoshi font-thin">{cartItem?.productDescription?.descOne}</p>
        <p className="text-[0.8em] font-satoshi font-thin">{`£ ${productPrice}`}</p>

        <QuantitySelector
          item={cartItem}
          quantity={quantity}
          onInc={() => onIncrease(_id)}
          onDec={() => onDecrease(_id)}
        />
      </div>
    </div>
  );
}
