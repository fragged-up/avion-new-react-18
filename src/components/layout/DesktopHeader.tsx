
import { Link } from 'react-router-dom';
import { NavLinks } from '@/config';
import { CartBadge, AvatarBadge } from '@/components/badges';

import LogoIcon from '@/icons/LogoIcon';
import SearchIcon from '@/icons/SearchIcon';
import CartScreen from "@/features/cart/CartScreen";
import { toggleCart, selectIsCartOpen } from  '@/stores/cart';
import { useAppSelector, useAppDispatch } from '@/stores/core/hooks';




export default function DesktopHeader() {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector(selectIsCartOpen);
  return (
      <div className="w-full">

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

      </div>
  );
}
