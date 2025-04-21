import pr1 from '@/assets/images/shop-image-1.svg';
import pr2 from '@/assets/images/shop-image2.svg';
import {  CheckOutM } from '@/features/products/ProductListMobile';
import CartItem from './CartItem';

export default function CartScreen() {
  const desc1 = `A timeless ceramic vase with a tri color grey glaze.`;
  const desc2 = `Beautiful and simple this is one for the classics`;

  return (
    <div className="flex flex-col gap-4 pl-4 py-2">
      <header className="flex">
        <h1 className="font-clash text-base">Your Shopping Cart</h1>
      </header>

      <main className='flex flex-col gap-4'>
        <CartItem
          id={'1'}
          image={pr1}
          title={'Graystone Vase'}
          description={desc2}
          price={85}
          quantity={2}
          onIncrease={(id) => console.log('Increase', id)}
          onDecrease={(id) => console.log('Decrease', id)}
        />
        <CartItem
          id={'2'}
          image={pr2}
          title={'Graystone Vase'}
          description={desc2}
          price={85}
          quantity={2}
          onIncrease={(id) => console.log('Increase', id)}
          onDecrease={(id) => console.log('Decrease', id)}
        />
      </main>

      <footer className="w-auto">
        <CheckOutM total={'654'} />
      </footer>
    </div>
  );
}
