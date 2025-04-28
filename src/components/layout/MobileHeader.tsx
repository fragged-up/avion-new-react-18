import MenuIcon from '@/icons/MenuIcon';
import SearchBadge from '../badges/SearchBadge';
import { Link } from 'react-router-dom';
import { CartBadge, AvatarBadge } from '@/components/badges';
import { toggleCart, selectIsCartOpen } from '@/stores/cart';
import { useAppSelector, useAppDispatch } from '@/stores/core/hooks';

export default function MobileHeader() {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector(selectIsCartOpen);

  return (
    <div className="flex justify-between items-center">
      <div className="flex p-6 ">
        <Link to="/">
          <h1 className="font-satoshi text-base">Avion</h1>
        </Link>
      </div>

      <div className="flex justify-center items-center p-4 gap-[1.4em]">
          <SearchBadge />
          <CartBadge onClick={() => dispatch(toggleCart())} />
          <AvatarBadge />
          <MenuIcon />
      </div>
    </div>
  );
}
