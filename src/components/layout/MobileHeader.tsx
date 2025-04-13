import { useState } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '@/assets/searchIcon.svg';
import menuIcon from '@/assets/menuIcon.svg';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/About', label: 'About' },
  { to: '/all', label: 'All' },
  { to: '/old-products', label: 'Product-Id' },
  { to: '/old', label: 'Old' },
  { to: '/basket', label: 'Basket' },
  { to: '/test', label: 'Test' },
];

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <div className="w-full bg-white min-[767px]:hidden flex justify-between items-center">
      <div className="p-6 flex">
        <Link to="/">
          <h1 className="font-satoshi text-base font-normal">Avion</h1>
        </Link>
      </div>

      <div className="p-4 flex gap-[1.4em] justify-between items-center">
        <img src={searchIcon} alt="search-icon" className="w-5 h-5" />
        <img src={menuIcon} alt="menu-icon" className="w-full" onClick={toggleMenu} />
      </div>

      <div
        className={`
          fixed top-0 right-0 h-full overflow-hidden z-[1]
          bg-[#2a254b] text-white flex flex-col items-end gap-4
          transition-all duration-500 ease-out delay-300
          ${isMenuOpen ? 'w-full opacity-100 visible block' : 'w-0 opacity-0 invisible hidden'}
        `}
      >
        <div
          className="relative w-full left-[22px] top-[14px] cursor-pointer"
          onClick={handleCloseMenu}
        >
          <span className="absolute top-0 block">|</span>
          <span className="absolute top-0 block">|</span>
        </div>

        <div className="flex flex-col items-end gap-4 pr-8 pt-16">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={handleCloseMenu}
              className="font-clash font-normal text-[1.7em]"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
