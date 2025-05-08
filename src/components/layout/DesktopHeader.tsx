import { useState } from 'react';
import { CartBadge, AvatarBadge } from '@/components/badges';
import { toggleCart } from '@/stores/cart';
import { useAppDispatch } from '@/stores/core/hooks';
import { Container, LayoutHeader, Nav } from '../ui/Semantic';
import { Link } from 'react-router-dom';
import LogoIcon from '@/icons/LogoIcon';
import SearchIcon from '@/icons/SearchIcon';
import CartModal from '@/features/cart/CartModal';
import NavLinksList from '@/components/navigation/NavLinksList';
import SearchBar from '@/components/search/SearchBar';

export default function DesktopHeader() {
  const dispatch = useAppDispatch();
  const [searchOpen, setSearchOpen] = useState(false)

//  const { isAuthenticated } = useAuthStore()
  // if()

  const handleSearch = async (query: string) => {
    console.log("Searching:", query)
  }

  return (
    <div className="w-full relative">
      <LayoutHeader className="w-[95%] bg-white mx-auto flex justify-between py-4 border-b border-[hsl(0,0%,80%)]">
      <Container className="flex items-center gap-4">
          <button onClick={() => setSearchOpen((p) => !p)}>
            <SearchIcon />
          </button>
          {searchOpen && (
            <div className="absolute left-0 top-full w-full bg-white shadow-lg p-4 z-50">
              <SearchBar onSearch={handleSearch} />
            </div>
          )}
        </Container>
        <Container>
          <LogoIcon />
        </Container>
        <Container className="flex justify-between items-center gap-[20px]">
          <CartBadge onClick={() => dispatch(toggleCart())} />

             <Link to="/login">
             <AvatarBadge />
             </Link>

        </Container>
      </LayoutHeader>

      <Nav>
        <NavLinksList />
        <CartModal />
      </Nav>
    </div>
  );
}
