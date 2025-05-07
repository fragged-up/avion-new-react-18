import { toggleCart } from '@/stores/cart';
import { useAppDispatch } from '@/stores/core/hooks';
import { Link } from 'react-router-dom';
import styles from '@/styles/css/ProductListMobile.module.css';

type Total = {
  total: number | string;
};

export const CloseCartButton: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <button onClick={() => dispatch(toggleCart())} className="absolute top-4 right-4 text-2xl font-bold">
      &times;
    </button>
  );
};

export const CheckOutButton: React.FC<Total> = ({ total }) => {
  return (
    <div className={styles['checkout-w']}>
      <div className={styles['checkout-c']}>
        <h1 className={styles['sub-total']}>Subtotal</h1>
        <span className={styles['summary']}>£{total}</span>
      </div>
      <p className={styles['sb-note']}>Taxes and shipping are calculated at checkout</p>
      <div className={styles['go-to-checkout-c']}>
        <Link to="/checkout" className={styles['go-to-checkout-button']}>Go to Checkout</Link>
      </div>
    </div>
  );
};
