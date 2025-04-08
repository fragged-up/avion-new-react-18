import styles from '../CSSModules/Inspect.module.css';
import inspectImage from '../assets/images/Inspect-image.svg';
import CatalogDataContainer from './CatalogData';
import Unique from './Unique';

type ProductInformationProps = {
  dcTitle: string;
  dcPrice: string;
  dcT: string;
  dcG1: string;
  dcG2: string;
  dcG3: string;
  dcHeight: string;
  dcWidth: string;
  dcDepth: string;
};

function DcText({
  dcTitle,
  dcPrice,
  dcT,
  dcG1,
  dcG2,
  dcG3,
  dcHeight,
  dcWidth,
  dcDepth,
}: ProductInformationProps) {
  return (
    <div className={styles['dc-w']}>
      <div className={styles['dc-c']}>
        <div className={styles['dc-main-head-c']}>
          <h1 className={styles['dc-main-head']}>{dcTitle}</h1>

          <h1 className={styles['dc-price']}>£{dcPrice}</h1>
        </div>

        <div className={styles['dc-sub-title-c']}>
          <h2 className={styles['dc-sub-title']}>Product description</h2>

          <p className={styles['dc-text']}>{dcT}</p>

          <ul className={styles['dc-grants']}>
            <li className={styles['dc-grants-li']}>{dcG1}</li>

            <li className={styles['dc-grants-li']}>{dcG2}</li>

            <li className={styles['dc-grants-li']}>{dcG3}</li>
          </ul>
        </div>

        <div className={styles['dc-dimensions-c']}>
          <h1 className={styles['dc-dimensions-head']}>Dimensions</h1>

          <div className={styles['dimensions-container']}>
            <div className={styles['dim-child']}>
              <p className={styles['dc-d-h']}>Height</p>

              <p className={styles['dc-d-v']}>{dcHeight}cm</p>
            </div>

            <div className={styles['dim-child-2']}>
              <p className={styles['dc-d-h']}>Width</p>

              <p className={styles['dc-d-v']}>{dcWidth}cm</p>
            </div>

            <div className={styles['dim-child-3']}>
              <p className={styles['dc-d-h']}>Depth</p>

              <p className={styles['dc-d-v']}>{dcDepth}cm</p>
            </div>
          </div>
        </div>

        <div className={styles['quantity-c']}>
          <div className={styles['quantity-head-c']}>
            <h2 className={styles['quantity-sb']}>Quantity</h2>
          </div>

          <div className={styles['quantity-m-c']}>
            <button className={styles['quantity-subtract']}>-</button>

            <h2 className={styles['quantity-number']}>1</h2>

            <button className={styles['quantity-add']}>+</button>
          </div>

          <div className={styles['add-to-cart-c']}>
            <button className={styles['add-to-cart-button']}>Add to cart</button>
          </div>
        </div>

        {/* <CatalogDataContainer /> */}

        {/* <Unique /> */}
      </div>
    </div>
  );
}

function Inspect() {
  const titleValue = 'The Dandy Chair';

  const dctValue =
    'A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.';

  return (
    <>
      <div className={styles['inspect-w']}>
        <div className={styles['inspect-c']}>
          <img src={inspectImage} alt="" className={styles['inspect-img']} />
        </div>

        <DcText
          dcTitle={titleValue}
          dcPrice={'250'}
          dcT={dctValue}
          dcG1={'Premium Material'}
          dcG2={'Handsome upholstery'}
          dcG3={'Quality timeless classic'}
          dcHeight={'110'}
          dcWidth={'75'}
          dcDepth={'50'}
        />

        <CatalogDataContainer />

        <Unique />
      </div>

      <div className={styles['desk-inspect-w']}>
        <div className={styles['desk-inspect-c']}>
          <div className={styles['desk-inspect-left-side']}>
            <div className={styles['desk-inspect-logo']}></div>
          </div>

          <div className={styles['desk-inspect-right-side']}>
            <DcText
              dcTitle={titleValue}
              dcPrice={'250'}
              dcT={dctValue}
              dcG1={'Premium Material'}
              dcG2={'Handsome upholstery'}
              dcG3={'Quality timeless classic'}
              dcHeight={'110'}
              dcWidth={'75'}
              dcDepth={'50'}
            />
          </div>
        </div>

        <CatalogDataContainer />

        <Unique />

        <div className={styles['desk-content-4']}>
          <div className={styles['desk-w-4']}>
            <div className={styles['desk-join-c']}>
              <h4 className={styles['desk-join-sb']}>Join the club and get the benefits</h4>

              <p className={styles['desk-join-pr']}>
                Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up
                stores and more
              </p>
            </div>

            <div className={styles['desk-join-in-c']}>
              <input type="text" className={styles['desk-join-in']} placeholder="your@email.com" />

              <button className={styles['desk-join-button']}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Inspect, DcText };
