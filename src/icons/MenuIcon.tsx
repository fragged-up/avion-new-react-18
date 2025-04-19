import MenuModal from '@/components/ui/MenuModal';
import { MenuBadgeIcon } from '.';
import { useSelector } from 'react-redux'
import { openMenu, selectIsMenuOpen } from '@/stores/modal';
import { useAppDispatch } from '@/stores/core/hooks';

export default function MenuIcon() {
 const dispatch = useAppDispatch()
 const isMenuOpen = useSelector(selectIsMenuOpen)

  const handleOpenMenu = () => {
    dispatch(openMenu())
  }

  return (
    <div className="cursor-pointer">
      <img src={MenuBadgeIcon} className="w-4 h-4 cursor-pointer" alt="menu-icon" onClick={handleOpenMenu}  />
      <div>
      {isMenuOpen && <MenuModal />}
      </div>

    </div>
  )
}
