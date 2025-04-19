import MenuIcon from '@/icons/MenuIcon';
import SearchBadge from '../badges/SearchBadge';
import LogoIcon from '@/icons/LogoIcon';






export default function MobileHeader() {
  return (
    <div className="flex justify-between items-center">
      <div className="p-4">
       <div className='p-6 font-satoshi text-base'>
         <LogoIcon />
         </div>
      </div>

      <div className="flex justify-center items-center p-4 gap">
        <SearchBadge />
        <MenuIcon />
      </div>
    </div>
  );
}
