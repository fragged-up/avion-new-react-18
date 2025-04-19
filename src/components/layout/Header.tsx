import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

export default function Header() {
  return (
    <div className="w-full">
      <div className='hidden md:block'><DesktopHeader /></div>
      <div className='block md:hidden'><MobileHeader /></div>
    </div>
  );
}
