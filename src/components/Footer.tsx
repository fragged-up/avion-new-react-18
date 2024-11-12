import styles from '@/CSSModules/HomeM.module.css';

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
              type='email'
              className={styles['desk-footer-join-in']}
              placeholder='your@email.com'
            />

            <button className={styles['desk-footer-join-button']}>Sign Up</button>
          </div>
        </div>
      </div>

      <div className={styles['desk-copyright-c']}>
        <h2 className={styles['desk-copyright-sb']}>Copyright 2022 Avion LTD</h2>
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
          <input type='email' className={styles['footer-join-in']} placeholder='your@email.com' />

          <button className={styles['footer-join-button']}>Sign Up</button>
        </div>

        <div className={styles['copyright-c']}>
          <h2 className={styles['copyright-sb']}>Copyright 2022 Avion LTD</h2>
        </div>
      </div>
    </div>
  );
}

// function FooterCS() {

//   return (

//     <div className={styles["footerM-wrapper-CS"]}>

//       <div className={styles["footerCS-container"]}>

//         <div className={styles["footer-catagories-CS"]}>

//           <h1 className={styles["footer-head"]}>Catagories</h1>

//           <p className={styles["footer-para"]}>Crockery</p>

//           <p className={styles["footer-para"]}>Furniture</p>

//           <p className={styles["footer-para"]}>Homeware</p>

//           <p className={styles["footer-para"]}>Plant pots</p>

//           <p className={styles["footer-para"]}>Chairs</p>

//           <p className={styles["footer-para"]}>Crockery</p>

//         </div>

//         <div className={styles["footer-menu-CS"]}>

//           <h1 className={styles["footer-head"]}>Menu</h1>

//           <p className={styles["footer-para"]}>New arrivals</p>

//           <p className={styles["footer-para"]}>Best sellers</p>

//           <p className={styles["footer-para"]}>Recently viewed</p>

//           <p className={styles["footer-para"]}>Popular this week</p>

//           <p className={styles["footer-para"]}>All products</p>

//         </div>

//         <div className={styles["footer-our-company-CS"]}>

//           <h1 className={styles["footer-head"]}>Our Company</h1>

//           <p className={styles["footer-para"]}>About us</p>

//           <p className={styles["footer-para"]}>Vacancies</p>

//           <p className={styles["footer-para"]}>Contact us</p>

//           <p className={styles["footer-para"]}>Privacy</p>

//           <p className={styles["footer-para"]}>Returns policy</p>

//         </div>

//         <div className={styles["footer-social-links-CS"]}>

//           <h1 className={styles["footer-head"]}>Social links</h1>

//           <p className={styles["footer-para"]}>Instagram</p>

//           <p className={styles["footer-para"]}>Facebook</p>

//           <p className={styles["footer-para"]}>Linkdin</p>

//           <p className={styles["footer-para"]}>Twitter</p>

//         </div>

//       </div>

//       <div className={styles["bottom-sc-CS"]}>

//         <h1 className={styles["footer-mail-CS"]}>Join our mailing list</h1>

//         <div className={styles["footer-join-c-CS"]}>

//           <input

//             type="email"

//             className={styles["footer-join-in-CS"]}

//             placeholder="your@email.com"

//           />

//           <button className={styles["footer-join-button-CS"]}>Sign Up</button>

//         </div>

//         <div className={styles["copyright-c-CS"]}>

//           <h2 className={styles["copyright-sb-CS"]}>

//             Copyright 2022 Avion LTD

//           </h2>

//         </div>

//       </div>

//     </div>

//   );

// }
