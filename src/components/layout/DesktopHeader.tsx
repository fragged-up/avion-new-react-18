import { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '@/assets/icons/menuIcon.svg';
import searchIcon from '@/assets/icons/searchIcon.svg';
import userCart from '@/assets/icons/user-cart.svg';
import userAvatar from '@/assets/icons/user-avatar.svg';
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
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/About', label: 'About' },
    { to: '/all', label: 'All' },
    { to: '/old-products', label: 'Product-Id' },
    { to: '/old', label: 'Old' },
    { to: '/basket', label: 'Basket' },
    { to: '/test', label: 'Test' },
  ];

  return (
    <div className="">
      <div className="w-full block">
        <div className="w-[95%] bg-white mx-auto flex justify-between py-4 border-b border-[hsl(0,0%,80%)]">
          <div className="flex">
            <img src={searchIcon} alt="" className="w-full" />
          </div>

          <div className="flex">
            <Link to="/">
              {' '}
              <h1 className="font-clash font-normal text-[1.5em]">Avion</h1>
            </Link>
          </div>

          <div className="flex justify-between items-center gap-[20px]">
            <img src={userCart} alt="cart-icon" className="w-full" />
            <img src={userAvatar} alt="avatar-icon" className="w-full" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 pt-4 pb-8 bg-white text-[#726e8d]">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={handleCloseMenu}
              className="font-clash font-normal text-[1em]"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
