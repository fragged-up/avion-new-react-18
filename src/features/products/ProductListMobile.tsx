import styles from '@/styles/css/ProductListMobile.module.css';
interface ProductProps {
  prImg: string;
  prTitle: string;
  prPrice: string | number;
  popularClass?: string;
  prDesc?: string;
  total?: number;
}

interface ProductListProps {
  image:string | any;
  title:string;
  price:number;
  popularClass?:string;
}

interface PopularProps{
  image:string | any;
  title:string;
  price:number;
}
interface CatalogProps {
  image:string | any;
  title:string;
  price:number;
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

function ProductListDesktop({ image, title, price, popularClass }: ProductListProps) {
  const imgClasses = `${styles['desk-product-img']} ${popularClass ? popularClass : ''}`;

  return (
    <div className={styles['product-w']}>
      <div className={styles['product-c']}>
        <img src={image} alt='product-image' className={imgClasses} />
      </div>
      <h2 className={styles['product-title']}>{title}</h2>
      <h2 className={styles['product-price']}>£{price}</h2>
    </div>
  );
}

// Popular Product component

function OurPopularM({ image, title, price }: PopularProps) {
  return (
    <div className={styles['popular-w']}>
      <div className={styles['popular-c']}>
        <img src={image} alt='' className={styles['our-img']} />
      </div>
      <h2 className={styles['popular-title']}>{title}</h2>
      <h2 className={styles['popular-price']}>£{price}</h2>
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

function DeskCatalog({ image, title, price }: CatalogProps) {
  return (
      <div className='flex flex-col justify-start items-start gap-[16px] max-w-[375px]'>
        <div className='flex'>
          <img src={image} alt='catalog-image' className='w-full h-full' />
        </div>
        <h2 className='font-satoshi text-[1.3em] font-light'>{title}</h2>
        <h2 className='font-satoshi text-[1.3em] font-extralight'>{`£ ${price}`}</h2>
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
