import MenuModal from '@/components/ui/MenuModal';
import { MenuBadgeIcon } from '.';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/stores/core/store';
import { openMenu, selectIsMenuOpen } from '@/stores/modal';

export default function MenuIcon() {
 const dispatch = useDispatch()
 const isMenuOpen = useSelector(selectIsMenuOpen)

  const handleOpenMenu = () => {
    dispatch(openMenu())
  }

  return (
    <div onClick={handleOpenMenu} className="cursor-pointer">
      <img src={MenuBadgeIcon} className="w-4 h-4" alt="menu-icon" />
      {isMenuOpen && <MenuModal />}
    </div>
  )
}
