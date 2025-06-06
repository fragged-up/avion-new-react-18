import { MenuBadgeIcon } from '@/icons';
import { useSelector } from 'react-redux'
import { openMenu, selectIsMenuOpen } from '@/stores/modal';
import { useAppDispatch } from '@/stores/core/hooks';
import MenuModal from '@/components/layout/MenuModal';


export default function MenuIcon() {
 const dispatch = useAppDispatch()
 const isMenuOpen = useSelector(selectIsMenuOpen)

  const handleOpenMenu = () => {
    dispatch(openMenu())
  }

  return (
    <div className="cursor-pointer">
      <img src={MenuBadgeIcon} className="w-5 h-5 cursor-pointer" alt="menu-icon" onClick={handleOpenMenu}  />
      <div>
      {isMenuOpen && <MenuModal />}
      </div>

    </div>
  )
}
