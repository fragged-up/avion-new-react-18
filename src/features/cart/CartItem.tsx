import QuantitySelector from '@/components/ui/QuantitySelector';

type CartItemProps = {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
};

export default function CartItem({
  id,
  image,
  title,
  description,
  price,
  quantity,
  onIncrease,
  onDecrease,
}: CartItemProps) {
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
          quantity={quantity}
          onIncrease={() => onIncrease(id)}
          onDecrease={() => onDecrease(id)}
        />
      </div>
    </div>
  );
}
