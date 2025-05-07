import { useAppDispatch, useAppSelector } from '@/stores/core/hooks';
import { selectIsCartOpen } from '@/stores/cart';
import { Aside, LayoutHeader, LayoutFooter, Section, Main, Heading } from '@/components/ui/Semantic';
import { CloseCartButton, CheckOutButton } from '@/features/cart/CartButtons';
import CartItem from '@/features/cart/CartItem';
import pr1 from '@/assets/images/shop-image-1.svg';
import pr2 from '@/assets/images/shop-image2.svg';


const cartData = [
  {
    id: 1,
    image: pr1,
    title: 'Graystone Vase',
    description: 'A timeless ceramic vase with a tri color grey glaze.',
    price: 85,
    quantity: 2,
  },
  {
    id: 2,
    image: pr2,
    title: 'Graystone Vase',
    description: 'Beautiful and simple this is one for the classics',
    price: 85,
    quantity: 2,
  },
];

const CartModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector(selectIsCartOpen);

  const cartAsideClassName = `fixed top-0 right-0 h-screen w-[400px] bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${
    isCartOpen ? 'translate-x-0' : 'translate-x-full'
  }`;

  return (
    <Aside className={cartAsideClassName}>
      <CloseCartButton />

      <Section className="h-full flex flex-col justify-center px-4 pt-4">
        <LayoutHeader className="flex pb-4">
          <Heading className="text-base">Your Shopping Cart</Heading>
        </LayoutHeader>

        <Main className="flex flex-col gap-4">
          {cartData.map((item) => (
            <CartItem
              key={item.id}
              cartItem={item}
              onIncrease={(id) => console.log('Increase', id)}
              onDecrease={(id) => console.log('Decrease', id)}
            />
          ))}
        </Main>

        <LayoutFooter>
          <CheckOutButton total={'452'} />
        </LayoutFooter>
      </Section>
    </Aside>
  );
};

export default CartModal;
