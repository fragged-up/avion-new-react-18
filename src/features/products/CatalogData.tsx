import { ProductCatalog } from '@/features/products/ProductListMobile';
import styles from '@/styles/css/AllProducts.module.css';
import rusticCatalog from '@/assets/images/rustic-catalog.svg';
import silkyCatalog from '@/assets/images/silky-catalog.svg';
import lucyCatalog from '@/assets/images/lucy-catalog.svg';
import dandyCatalog from '@/assets/images/dandy-catalog.svg';
import dRustic from '@/assets/deskProduct/RUSTIC.svg';
import dSilky from '@/assets/deskProduct/SILKY.svg';
import dLucy from '@/assets/deskProduct/LUCY.svg';
import dDandy from '@/assets/deskProduct/DANDY.svg';
import { Link } from 'react-router-dom';

function CatalogDataContainer() {
  return (
    <>
      <div className={styles['catalog-cmp']}>
        <div className={styles['ymal-c']}>
          <h2 className={styles['ymal-head']}>You might also like</h2>
        </div>

        <div className={styles['catalog-cmp-w']}>
          <div className={styles['catalog-cmp-c']}>
            <ProductCatalog prImg={rusticCatalog} prTitle={'Rustic Vase Set'} prPrice={'£155'} />

            <ProductCatalog prImg={silkyCatalog} prTitle={'The Silky Vase'} prPrice={'£125'} />
          </div>

          <div className={styles['catalog-cmp-c']}>
            <ProductCatalog prImg={lucyCatalog} prTitle={'The Lucy Lamp'} prPrice={'£399'} />

            <ProductCatalog prImg={dandyCatalog} prTitle={'The Dandy chair'} prPrice={'£250'} />
          </div>
        </div>

        <div className={styles['catalog-btn-c']}>
          <button className={styles['catalog-button']}>View Collection</button>
        </div>
      </div>

      <div className={styles['desk-catalog-cmp']}>
        <div className={styles['desk-ymal-c']}>
          <h2 className={styles['desk-ymal-head']}>You might also like</h2>
        </div>

        <div className={styles['desk-catalog-cmp-c']}>
          <ProductCatalog prImg={dRustic} prTitle={'Rustic Vase Set'} prPrice={'£155'} />

          <ProductCatalog prImg={dSilky} prTitle={'The Silky Vase'} prPrice={'£125'} />

          <ProductCatalog prImg={dLucy} prTitle={'The Lucy Lamp'} prPrice={'£399'} />

          <ProductCatalog prImg={dDandy} prTitle={'The Dandy chair'} prPrice={'£250'} />
        </div>

        <Link to="/products">
          <div className={styles['desk-view-btn-c']}>
            <button className={styles['desk-view-btn']}>View Collection</button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default CatalogDataContainer;
