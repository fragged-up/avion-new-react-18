import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLinks } from '@/config';
import { CartBadge, AvatarBadge } from '@/components/badges';
import searchIcon from '@/assets/icons/searchIcon.svg';
import userCart from '@/assets/icons/user-cart.svg';
import userAvatar from '@/assets/icons/user-avatar.svg';
import LogoIcon from '@/icons/LogoIcon';
import SearchIcon from '@/icons/SearchIcon';

export default function DesktopHeader() {
  const [isMenu, setMenu] = useState(false);

  function openMenu() {
    setMenu(!isMenu);

    console.log(isMenu);
  }

  function closeMenu() {
    setMenu(!isMenu);
    console.log(isMenu);
  }
  const handleCloseMenu = () => {
    closeMenu();
  };


  return (
      <div className="w-full block">
        <div className="w-[95%] bg-white mx-auto flex justify-between py-4 border-b border-[hsl(0,0%,80%)]">
          <div className="flex">
            <SearchIcon />
          </div>

       <div>
        <LogoIcon />
        </div>

          <div className="flex justify-between items-center gap-[20px]">
            <CartBadge />
           <div>
             <AvatarBadge />


             </div>

          </div>
        </div>






        <div className="flex justify-center items-center gap-4 pt-4 pb-8 bg-white text-[#726e8d]">
          {NavLinks.map(({ to, label }) => (
            <Link key={to} to={to} onClick={handleCloseMenu} className="font-clash font-normal text-[1em]">
              {label}
            </Link>
          ))}
        </div>

      </div>
  );
}
