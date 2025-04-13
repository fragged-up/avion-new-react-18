import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '@/CSSModules/HomeM.module.css';
import menuIcon from '@/assets/icons/menuIcon.svg';
import searchIcon from '@/assets/icons/searchIcon.svg';
import userCart from '@/assets/icons/user-cart.svg';
import userAvatar from '@/assets/icons/user-avatar.svg';

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
    <div className={styles['wrapper']}>
      <div className={styles['container']}>
        <div className={styles['logo-container']}>
          <Link to="/">
            {' '}
            <h1 className={styles['logo']}>Avion</h1>
          </Link>
        </div>

        <div className={styles['icons-container']}>
          <img src={searchIcon} alt="" className={styles['search-icon']} />

          <img src={menuIcon} alt="" className={styles['menu-icon']} onClick={() => openMenu()} />
        </div>

        <div className={`${styles['opened-menu-c']} ${isMenu ? styles.menuVisible : ''}`}>
          <div className={styles['opened-menu']}>
            <div className={styles['x-c']} onClick={() => closeMenu()}>
              <span className={styles['x-s']}>|</span>

              <span className={styles['x-s']}>|</span>
            </div>

            <div className={styles['headline-c']}>
              <Link to="/" className={styles['headline']} onClick={handleCloseMenu}>
                Home
              </Link>

              <Link to="/About" className={styles['headline']} onClick={handleCloseMenu}>
                About
              </Link>

              <Link to="/all" className={styles['headline']} onClick={handleCloseMenu}>
                All
              </Link>

              <Link to="/old-products" className={styles['headline']} onClick={handleCloseMenu}>
                Product-Id
              </Link>

              <Link to="/old" className={styles['headline']} onClick={handleCloseMenu}>
                Old
              </Link>
              <Link to="/basket" className={styles['headline']} onClick={handleCloseMenu}>
                Basket
              </Link>
              <Link to="/test" className={styles['headline']} onClick={handleCloseMenu}>
                Test
              </Link>
            </div>
          </div>
        </div>
      </div>



      <div className={styles['desktop-w']}>
        <div className={styles['desktop-c']}>
          <div className={styles['desk-search-c']}>
            <img src={searchIcon} alt="" className={styles['desk-search-icon']} />
          </div>

          <div className={styles['desk-logo-c']}>
           <Link to="/"> <h1 className={styles['desk-logo']}>Avion</h1></Link>
          </div>

          <div className={styles['desk-rest-icon-c']}>
            <img src={userCart} alt="" className={styles['desk-user-icon']} />

            <img src={userAvatar} alt="" className={styles['desk-avatar-icon']} />
          </div>
        </div>

        <div className={styles['links-c']}>
          <Link to="/" className={styles['link']} onClick={handleCloseMenu}>
            Home
          </Link>

          <Link to="/About" className={styles['link']} onClick={handleCloseMenu}>
            About
          </Link>

          <Link to="/all" className={styles['link']} onClick={handleCloseMenu}>
            All
          </Link>

          <Link to="/old-products" className={styles['link']} onClick={handleCloseMenu}>
            Product-Id
          </Link>

          <Link to="/old" className={styles['link']} onClick={handleCloseMenu}>
            Old
          </Link>
          <Link to="/basket" className={styles['link']} onClick={handleCloseMenu}>
          Basket
          </Link>

          <Link to="/test" className={styles['link']} onClick={handleCloseMenu}>
            Test
          </Link>
        </div>
      </div>
    </div>
  );
}

export function InHeader() {
  const [isMenu, setMenu] = useState(false);

  function openMenuIn() {
    setMenu(!isMenu);

    console.log(isMenu);
  }

  function closeMenuIn() {
    setMenu(!isMenu);

    console.log(isMenu);
  }

  return (
    <>
      <div className={styles['wrapper-inheader']}>
        <div className={styles['container']}>
          <div className={styles['logo-container']}>
            <h1 className={styles['logo']}>Avion</h1>
          </div>

          <div className={styles['icons-container']}>
            <img src={searchIcon} alt="" className={styles['search-icon']} />

            <img src={userCart} alt="" className={styles['user-cart']} />

            <img src={userAvatar} alt="" className={styles['user-avatar']} />

            <img
              src={menuIcon}
              alt=""
              className={styles['menu-icon']}
              onClick={() => openMenuIn()}
            />
          </div>
        </div>

        <div className={`${styles['opened-menu-c']} ${isMenu ? styles.menuVisible : ''}`}>
          <div className={styles['opened-menu']}>
            <div className={styles['x-c']} onClick={() => closeMenuIn()}>
              <span className={styles['x-s']}>|</span>

              <span className={styles['x-s']}>|</span>
            </div>

            <div className={styles['headline-c']}>
              <span className={styles['headline']}>Plant dots</span>

              <span className={styles['headline']}>Ceramics</span>

              <span className={styles['headline']}>Tables</span>

              <span className={styles['headline']}>Chairs</span>

              <span className={styles['headline']}>Crockery</span>

              <span className={styles['headline']}>Tableware</span>

              <span className={styles['headline']}>Cutlery</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['desk-inheader-w']}>
        <div className={styles['desk-inheader-c']}>
          <div className={styles['desktop-w']}>
            <div className={styles['desktop-c']}>
              <div className={styles['desk-search-c']}>
                <img src={searchIcon} alt="" className={styles['desk-search-icon']} />
              </div>

              <div className={styles['desk-logo-c']}>
                <h1 className={styles['desk-logo']}>Avion</h1>
              </div>

              <div className={styles['desk-rest-icon-c']}>
                <img src={userCart} alt="" className={styles['desk-user-icon']} />

                <img src={userAvatar} alt="" className={styles['desk-avatar-icon']} />
              </div>
            </div>

            <div className={styles['links-c']}>
              <span className={styles['link']}>Plant dots</span>

              <span className={styles['link']}>Ceramics</span>

              <span className={styles['link']}>Tables</span>

              <span className={styles['link']}>Chairs</span>

              <span className={styles['link']}>Crockery</span>

              <span className={styles['link']}>Tableware</span>

              <span className={styles['link']}>Cutlery</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function AbHeader() {
  const [isMenu, setMenu] = useState(false);

  function openMenuAb() {
    setMenu(!isMenu);

    console.log(isMenu);
  }

  function closeMenuAb() {
    setMenu(!isMenu);

    console.log(isMenu);
  }

  return (
    <>
      <div className={styles['wrapper-ab']}>
        <div className={styles['container-ab']}>
          <div className={styles['logo-container-ab']}>
            <h1 className={styles['logo-ab']}>Avion</h1>
          </div>

          <div className={styles['icons-container-ab']}>
            <img
              src={menuIcon}
              alt=""
              className={styles['menu-icon']}
              onClick={() => openMenuAb()}
            />
          </div>
        </div>

        <div className={`${styles['opened-menu-c']} ${isMenu ? styles.menuVisible : ''}`}>
          <div className={styles['opened-menu']}>
            <div className={styles['x-c']} onClick={() => closeMenuAb()}>
              <span className={styles['x-s']}>|</span>

              <span className={styles['x-s']}>|</span>
            </div>

            <div className={styles['headline-c']}>
              <span className={styles['headline']}>Plant dots</span>

              <span className={styles['headline']}>Ceramics</span>

              <span className={styles['headline']}>Tables</span>

              <span className={styles['headline']}>Chairs</span>

              <span className={styles['headline']}>Crockery</span>

              <span className={styles['headline']}>Tableware</span>

              <span className={styles['headline']}>Cutlery</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['desktop-ab-w']}>
        <div className={styles['desktop-ab-c']}>
          <div className={styles['logo-container-ab']}>
            <h1 className={styles['desk-logo-ab']}>Avion</h1>
          </div>

          <div className={styles['right-side']}>
            <div className={styles['desktop-ab-menu']}>
              <p className={styles['ab-menu']}>About us</p>

              <p className={styles['ab-menu']}>Contact</p>

              <p className={styles['ab-menu']}>Blog</p>
            </div>

            <div className={styles['desktop-ab-icon-c']}>
              <img src={searchIcon} alt="" className={styles['search-icon']} />

              <img src={userCart} alt="" className={styles['user-cart']} />

              <img src={userAvatar} alt="" className={styles['user-avatar']} />
            </div>
          </div>
        </div>

        <div className={styles['desktop-ab-title-c']}>
          <span className={styles['desktop-headline']}>All products</span>

          <span className={styles['desktop-headline']}>Plant dots</span>

          <span className={styles['desktop-headline']}>Ceramics</span>

          <span className={styles['desktop-headline']}>Tables</span>

          <span className={styles['desktop-headline']}>Chairs</span>

          <span className={styles['desktop-headline']}>Crockery</span>

          <span className={styles['desktop-headline']}>Tableware</span>

          <span className={styles['desktop-headline']}>Cutlery</span>
        </div>
      </div>
    </>
  );
}
