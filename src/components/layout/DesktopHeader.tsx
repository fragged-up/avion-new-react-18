import { Link } from 'react-router-dom';
import { NavLinks } from '@/config';
import { CartBadge, AvatarBadge } from '@/components/badges';
import { toggleCart, selectIsCartOpen } from '@/stores/cart';
import { useAppSelector, useAppDispatch } from '@/stores/core/hooks';
import LogoIcon from '@/icons/LogoIcon';
import SearchIcon from '@/icons/SearchIcon';
import CartScreen from '@/features/cart/CartScreen';






export default function DesktopHeader() {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector(selectIsCartOpen);


  return (
    <div className="w-full relative">
      <div className="w-[95%] bg-white mx-auto flex justify-between py-4 border-b border-[hsl(0,0%,80%)]">
        <div className="flex">
          <SearchIcon />
        </div>
        <div>
          <LogoIcon />
        </div>
        <div className="flex justify-between items-center gap-[20px]">
          <CartBadge onClick={() => dispatch(toggleCart())} />
          <AvatarBadge />
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 pt-4 pb-8 bg-white text-[#726e8d]">
        {NavLinks.map(({ to, label }) => (
          <Link key={to} to={to} className="font-clash font-normal text-[1em]">
            {label}
          </Link>
        ))}
      </div>

      <aside
        className={`fixed top-0 right-0 h-screen w-[400px] bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col justify-center px-4 pt-4">
          <button
            onClick={() => dispatch(toggleCart())}
            className="absolute top-4 right-4 text-2xl font-bold"
          >
            &times;
          </button>
          <CartScreen />
        </div>
      </aside>
    </div>
  );
}





/* Todo : Present Cart On The Mobile Header Also !  */
