import QuantitySelector from '@/components/ui/QuantitySelector';
import { Img } from '@/components/ui/Semantic';
import { decreaseQty, increaseQty } from '@/stores/cart';
import { useAppDispatch } from '@/stores/core/hooks';

interface CheckoutSummaryItemProps {
  item: {
    _id: string;
    productImage: string;
    name: string;
    productPrice: number;
    quantity: number;
  };
}

const CheckoutSummaryItem: React.FC<CheckoutSummaryItemProps> = ({ item }) => {
  const { _id, productImage, name, productPrice, quantity } = item;

  const dispatch = useAppDispatch();
  const handleIncrease = (id: string) => {
    dispatch(increaseQty(id));
  };
  const handleDecrease = (id: string) => {
    dispatch(decreaseQty(id));
  };

  return (
    <div className="flex items-center gap-4 py-3 border-b border-gray-200">
      <div className="w-20 h-20 overflow-hidden rounded-md shadow-sm">
        <Img src={productImage} alt={name} draggable={false} className="w-full h-full object-cover" />
      </div>

      <div className="flex-grow space-y-7">
        <h6 className="text-md  font-satoshi text-gray-800">{name}</h6>
        <QuantitySelector
          className="max-w-[100px] px-2 bg-white/90"
          quantity={quantity}
          item={item}
          onInc={() => handleIncrease(_id)}
          onDec={() => handleDecrease(_id)}
        />
      </div>
      <div className="text-sm font-medium font-satoshi text-gray-900">£{(productPrice * quantity).toFixed(2)}</div>
    </div>
  );
};

export default CheckoutSummaryItem;
