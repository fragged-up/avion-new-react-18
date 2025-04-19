import { CloseIcon } from "@/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/About', label: 'About' },
  { to: '/all', label: 'All' },
  { to: '/old-products', label: 'Product-Id' },
  { to: '/old', label: 'Old' },
  { to: '/basket', label: 'Basket' },
  { to: '/test', label: 'Test' },
];


export default function MenuNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
       <div className={`fixed top-0 right-0 h-full overflow-hidden z-[1] bg-[#2a254b] text-white flex flex-col items-end gap-4
            transition-all duration-500 ease-out delay-300  ${isMenuOpen ? 'w-full opacity-100 visible block' : 'w-0 opacity-0 invisible hidden'}`}>
          <div className="relative w-full left-[22px] top-[14px] cursor-pointer" onClick={handleCloseMenu}>
            <img src={CloseIcon} alt="close-icon"  className="w-5 h-5"/>
          </div>

          <div className="flex flex-col items-end gap-4 pr-8 pt-16">
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} onClick={handleCloseMenu} className="font-clash font-normal text-[1.7em]">
                {label}
              </Link>
            ))}
          </div>
        </div>
  );
}
