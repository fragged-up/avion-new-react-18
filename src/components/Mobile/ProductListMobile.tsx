// import { useState } from "react";

import styles from '@/CSSModules/ProductListMobile.module.css';

// Define the interface for product properties

interface ProductProps {
  prImg: string;

  prTitle: string;

  prPrice: string | number;

  popularClass?: string;

  prDesc?: string;

  total?: number;
}

// Mobile Product List component

function ProductListMobile({ prImg, prTitle, prPrice }: ProductProps) {
  // const [isClicked, setIsClicked] = useState<false | true>(false);

  return (
    <div className={styles['product-w']}>
      <div className={styles['product-c']}>
        <img src={prImg} alt='' className={styles['product-img']} />
      </div>

      <h2 className={styles['product-title']}>{prTitle}</h2>

      <h2 className={styles['product-price']}>{prPrice}</h2>
    </div>
  );
}

// Desktop Product List component

function ProductListDesktop({ prImg, prTitle, prPrice, popularClass }: ProductProps) {
  const imgClasses = `${styles['desk-product-img']} ${popularClass ? popularClass : ''}`;

  return (
    <div className={styles['product-w']}>
      <div className={styles['product-c']}>
        <img src={prImg} alt='' className={imgClasses} />
      </div>

      <h2 className={styles['product-title']}>{prTitle}</h2>

      <h2 className={styles['product-price']}>{prPrice}</h2>
    </div>
  );
}

// Popular Product component

function OurPopularM({ prImg, prTitle, prPrice }: ProductProps) {
  return (
    <div className={styles['popular-w']}>
      <div className={styles['popular-c']}>
        <img src={prImg} alt='' className={styles['our-img']} />
      </div>

      <h2 className={styles['popular-title']}>{prTitle}</h2>

      <h2 className={styles['popular-price']}>{prPrice}</h2>
    </div>
  );
}

// Product Catalog component

function ProductCatalog({ prImg, prTitle, prPrice }: ProductProps) {
  return (
    <div className={styles['catalog-w']}>
      <div className={styles['catalog-c']}>
        <img src={prImg} alt='' className={styles['catalog-img']} />
      </div>

      <h2 className={styles['catalog-title']}>{prTitle}</h2>

      <h2 className={styles['catalog-price']}>{prPrice}</h2>
    </div>
  );
}

// Product Cart component

function ProductCart({ prImg, prTitle, prDesc, prPrice }: ProductProps) {
  return (
    <div className={styles['product-cart-w']}>
      <div className={styles['product-cart-c']}>
        <img src={prImg} alt='' className={styles['product-cart-img']} />
      </div>

      <div className={styles['product-text-c']}>
        <h2 className={styles['product-cart-title']}>{prTitle}</h2>

        <p className={styles['product-cart-desc']}>{prDesc}</p>

        <p className={styles['product-cart-price']}>{'£' + prPrice}</p>

        <div className={styles['product-quantity-c']}>
          <button className={styles['product-quantity-subtract']}>-</button>

          <h2 className={styles['product-number']}>1</h2>

          <button className={styles['product-quantity-add']}>+</button>
        </div>
      </div>
    </div>
  );
}

// Checkout component

function CheckOutM({ total }: { total: number | string }) {
  return (
    <div className={styles['checkout-w']}>
      <div className={styles['checkout-c']}>
        <h1 className={styles['sub-total']}>Subtotal</h1>

        <span className={styles['summary']}>£{total}</span>
      </div>

      <p className={styles['sb-note']}>Taxes and shipping are calculated at checkout</p>

      <div className={styles['go-to-checkout-c']}>
        <button className={styles['go-to-checkout-button']}>Go to Checkout</button>
      </div>
    </div>
  );
}

// Desktop Catalog component

function DeskCatalog({ prImg, prTitle, prPrice }: ProductProps) {
  return (
    <div className={styles['deskpr-c']}>
      <div className={styles['img-wrapper']}>
        <img src={prImg} alt='' className={styles['deskpr-img']} />
      </div>

      <h2 className={styles['deskpr-title']}>{prTitle}</h2>

      <h2 className={styles['deskpr-price']}>£{prPrice}</h2>
    </div>
  );
}

export {
  ProductListMobile,
  ProductListDesktop,
  OurPopularM,
  ProductCatalog,
  ProductCart,
  CheckOutM,
  DeskCatalog,
};
