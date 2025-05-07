import { CartBadge, AvatarBadge } from '@/components/badges';
import { toggleCart } from '@/stores/cart';
import { useAppDispatch } from '@/stores/core/hooks';
import { Container, LayoutHeader, Nav } from '../ui/Semantic';
import LogoIcon from '@/icons/LogoIcon';
import SearchIcon from '@/icons/SearchIcon';
import CartModal from '@/features/cart/CartModal';
import NavLinksList from '../navigation/NavLinksList';

export default function DesktopHeader() {
  const dispatch = useAppDispatch();

  return (
    <div className="w-full relative">
      <LayoutHeader className="w-[95%] bg-white mx-auto flex justify-between py-4 border-b border-[hsl(0,0%,80%)]">
        <Container className="flex">
          <SearchIcon />
        </Container>
        <Container>
          <LogoIcon />
        </Container>
        <Container className="flex justify-between items-center gap-[20px]">
          <CartBadge onClick={() => dispatch(toggleCart())} />
          <AvatarBadge />
        </Container>
      </LayoutHeader>

      <Nav>
        <NavLinksList />
        <CartModal />
      </Nav>
    </div>
  );
}
