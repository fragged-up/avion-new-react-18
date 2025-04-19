import { Link } from 'react-router-dom';

export default function LogoIcon() {
  return (
      <div className="flex">
        <Link to="/">
          <h1 className="font-clash text-[1.5em]">Avion</h1>
        </Link>
      </div>
  );
}
