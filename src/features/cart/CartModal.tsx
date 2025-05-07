import { useAppDispatch, useAppSelector } from '@/stores/core/hooks';
import { selectCartItems, selectIsCartOpen } from '@/stores/cart/selectors';
import { Aside, LayoutHeader, LayoutFooter, Main, Heading, Paragraph } from '@/components/ui/Semantic';
import { CloseCartButton, CheckOutButton } from '@/features/cart/CartButtons';
import CartItem from '@/features/cart/CartItem';

import { decreaseQty, increaseQty } from '@/stores/cart/slice';



const CartModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector(selectIsCartOpen);
  const CartItems = useAppSelector(selectCartItems);
  const total = CartItems.reduce((sum: any, item: any) => sum + item.productPrice * item.quantity, 0);

  const handleIncrease = (id: string) => {
    dispatch(increaseQty(id));
  };

  const handleDecrease = (id: string) => {
    dispatch(decreaseQty(id));
  };

  const cartAsideClassName = `fixed top-0 right-0 h-screen w-[400px] bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${
    isCartOpen ? 'translate-x-0' : 'translate-x-full'
  }`;

  return (
    <Aside className={cartAsideClassName}>
      <CloseCartButton />
      <LayoutHeader className="flex justify-center items-center pb-4">
        <Heading className="text-base md:text-lg lg:text-xl">Your Shopping Cart</Heading>
      </LayoutHeader>

      <Main className="flex flex-col gap-4">
        {CartItems.length > 0 ? (
          CartItems.map((item: any, idx: number) => (
            <CartItem key={idx} cartItem={item} onIncrease={handleIncrease} onDecrease={handleDecrease} />
          ))
        ) : (
          <Paragraph className='text-center'>Your cart is empty.</Paragraph>
        )}
      </Main>

      <LayoutFooter>
        <CheckOutButton total={total.toFixed(2)} />
      </LayoutFooter>
    </Aside>
  );
};

export default CartModal;
