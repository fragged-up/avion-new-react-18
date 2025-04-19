import QuantitySelector from '@/components/ui/QuantitySelector';
import styles from '@/styles/css/ProductListMobile.module.css';

interface CartItemProps {
  image: string;
  title: string;
  price: string | number;
  popularClass?: string;
  description?: string;
  total?: number;
}

export default function CartItem({ image, title, description, price }: CartItemProps) {
  return (
    <div className={styles['product-cart-w']}>
      <div className={styles['product-cart-c']}>
        <img src={image} alt="cart-item" className={styles['product-cart-img']} />
      </div>

      <div className={styles['product-text-c']}>
        <h2 className={styles['product-cart-title']}>{title}</h2>
        <p className={styles['product-cart-desc']}>{description}</p>
        <p className={styles['product-cart-price']}>{'£' + price}</p>

        {/* <QuantitySelector
        quantity={item.quantity}
         onIncrease={() => handleIncrease(item.id)}
         onDecrease={() => handleDecrease(item.id)}
         /> */}

      </div>
    </div>
  );
}
