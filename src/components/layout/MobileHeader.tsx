import { Link } from 'react-router-dom';
import { CartBadge, AvatarBadge } from '@/components/badges';
import { toggleCart } from '@/stores/cart';
import { useAppDispatch } from '@/stores/core/hooks';
import { Container, LayoutHeader } from '../ui/Semantic';
import MenuIcon from '@/icons/MenuIcon';
import SearchBadge from '../badges/SearchBadge';
import CartModal from '@/features/cart/CartModal';

export default function MobileHeader() {
  const dispatch = useAppDispatch();
  return (
    <LayoutHeader className="flex justify-between items-center">
      <Container className="flex p-6">
        <Link to="/" className="font-satoshi text-base">
          Avion
        </Link>
      </Container>

      <Container className="flex justify-center items-center p-4 gap-[1.4em]">
        <SearchBadge />
        <CartBadge onClick={() => dispatch(toggleCart())} />
        <Link to="/login">
          <AvatarBadge />
        </Link>
        <MenuIcon />
      </Container>

      <CartModal />
    </LayoutHeader>
  );
}
