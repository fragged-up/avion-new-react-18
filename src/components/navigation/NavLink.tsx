import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      key={to}
      to={to}
      className={`font-clash font-normal text-[1em] ${
        isActive ? 'text-blue-500' : ''
      }`}
    >
      {label}
    </Link>
  );
};

export default NavLink;
