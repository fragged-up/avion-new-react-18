import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '@/styles/css/HomeM.module.css';
import menuIcon from '@/assets/icons/menuIcon.svg';
import searchIcon from '@/assets/icons/searchIcon.svg';
import userCart from '@/assets/icons/user-cart.svg';
import userAvatar from '@/assets/icons/user-avatar.svg';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

export default function Header() {
  const [isMenu, setMenu] = useState(false);

  function openMenu() {
    setMenu(!isMenu);

    console.log(isMenu);
  }

  function closeMenu() {
    setMenu(!isMenu);
    console.log(isMenu);
  }
  const handleCloseMenu = () => {
    closeMenu();
  };

  return (
    <div className="w-full">
      <MobileHeader />
      {/* <Avatar src={user?.profileImage} size="lg" /> */}
      <DesktopHeader />
    </div>
  );
}







