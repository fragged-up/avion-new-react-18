import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

export default function Header() {
  return (
    <header className="w-full">
      <nav className='hidden md:block'><DesktopHeader /></nav>
      <nav className='block md:hidden'><MobileHeader /></nav>
    </header>
  );
}
