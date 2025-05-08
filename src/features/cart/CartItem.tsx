import { Container, Img, Section } from '@/components/ui/Semantic';
import QuantitySelector from '@/components/ui/QuantitySelector';

type CartItemProps = {
  cartItem: any | any[];
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
};

export default function CartItem({ cartItem, onIncrease, onDecrease }: CartItemProps) {
  const { _id, productImage, name, productPrice } = cartItem;
  let quantity = cartItem.quantity || 1;

  return (
    <Section className="grid grid-cols-2 gap-2.5">
      <Container className="h-[180px]">
        <Img src={productImage} height={180} alt="cart-item" className="w-full max-w-[100%] h-full" />
      </Container>

      <div className="flex flex-col h-[180px] max-h-[180px] items-start gap-5">
        <h1 className="text-[1em] font-clash">{name}</h1>
        <p className="text-sm font-satoshi font-thin">{cartItem?.productDescription?.descOne}</p>
        <p className="text-sm  font-satoshi font-thin">{`£ ${productPrice}`}</p>
        <QuantitySelector item={cartItem} quantity={quantity} onInc={() => onIncrease(_id)} onDec={() => onDecrease(_id)} />
      </div>
    </Section>
  );
}
