import { NavLinks } from '@/config';
import NavLink from './NavLink';

const NavLinksList: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-4 pt-4 pb-8 bg-white text-[#726e8d]">
      {NavLinks.map((link) => (
        <NavLink key={link.to} to={link.to} label={link.label} />
      ))}
    </div>
  );
};

export default NavLinksList;
