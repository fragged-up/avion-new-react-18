import styles from '@/styles/css/HomeM.module.css';
import '@/styles/global.css';
import UICredit from '@/sections/UICredit';

export default function Footer() {
  return (
    <div className={styles['footerM-wrapper']}>
      <div className={styles['footer-desktop-c']}>
        <div className={styles['footerD-container']}>
          <div className={styles['footer-catagories']}>
            <h1 className={styles['footer-head']}>Catagories</h1>
            <p className={styles['footer-para']}>Crockery</p>
            <p className={styles['footer-para']}>Furniture</p>
            <p className={styles['footer-para']}>Homeware</p>
            <p className={styles['footer-para']}>Plant pots</p>
            <p className={styles['footer-para']}>Chairs</p>
            <p className={styles['footer-para']}>Crockery</p>
          </div>

          <div className={styles['footer-menu']}>
            <h1 className={styles['footer-head']}>Menu</h1>
            <p className={styles['footer-para']}>New arrivals</p>
            <p className={styles['footer-para']}>Best sellers</p>
            <p className={styles['footer-para']}>Recently viewed</p>
            <p className={styles['footer-para']}>Popular this week</p>
            <p className={styles['footer-para']}>All products</p>
          </div>

          <div className={styles['footer-our-company']}>
            <h1 className={styles['footer-head']}>Our Company</h1>
            <p className={styles['footer-para']}>About us</p>
            <p className={styles['footer-para']}>Vacancies</p>
            <p className={styles['footer-para']}>Contact us</p>
            <p className={styles['footer-para']}>Privacy</p>
            <p className={styles['footer-para']}>Returns policy</p>
          </div>
        </div>

        <div className={styles['desk-bottom-sc']}>
          <h1 className={styles['desk-footer-mail']}>Join our mailing list</h1>

          <div className={styles['desk-footer-join-c']}>
            <input
              type="email"
              name="mail-list-mobile"
              className={styles['desk-footer-join-in']}
              placeholder="your@email.com"
            />

            <button className={styles['desk-footer-join-button']}>Sign Up</button>
          </div>
        </div>
      </div>

      <div className={styles['desk-copyright-c']}>
        <h2 className={styles['desk-copyright-sb']}></h2>
        <div className="w-full">
          <UICredit />
        </div>
      </div>

      <div className={styles['footerM-container']}>
        <div className={styles['footer-catagories']}>
          <h1 className={styles['footer-head']}>Catagories</h1>
          <p className={styles['footer-para']}>Crockery</p>
          <p className={styles['footer-para']}>Furniture</p>
          <p className={styles['footer-para']}>Homeware</p>
          <p className={styles['footer-para']}>Plant pots</p>
          <p className={styles['footer-para']}>Chairs</p>
          <p className={styles['footer-para']}>Crockery</p>
        </div>

        <div className={styles['footer-menu']}>
          <h1 className={styles['footer-head']}>Menu</h1>
          <p className={styles['footer-para']}>New arrivals</p>
          <p className={styles['footer-para']}>Best sellers</p>
          <p className={styles['footer-para']}>Recently viewed</p>
          <p className={styles['footer-para']}>Popular this week</p>
          <p className={styles['footer-para']}>All products</p>
        </div>

        <div className={styles['footer-our-company']}>
          <h1 className={styles['footer-head']}>Our Company</h1>
          <p className={styles['footer-para']}>About us</p>
          <p className={styles['footer-para']}>Vacancies</p>
          <p className={styles['footer-para']}>Contact us</p>
          <p className={styles['footer-para']}>Privacy</p>
          <p className={styles['footer-para']}>Returns policy</p>
        </div>
      </div>

      <div className={styles['bottom-sc']}>
        <h1 className={styles['footer-mail']}>Join our mailing list</h1>

        <div className={styles['footer-join-c']}>
          <input type="email" name="mail-list" className={styles['footer-join-in']} placeholder="your@email.com" />
          <button className={styles['footer-join-button']}>Sign Up</button>
        </div>

        <div className={styles['copyright-c']}>
          <div className="w-full">
            <UICredit />
          </div>
        </div>
      </div>
    </div>
  );
}
