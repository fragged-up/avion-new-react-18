import styles from '@/styles/css/ProductListMobile.module.css';


type QuantityProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};



export default function QuantitySelector({ quantity, onIncrease, onDecrease }: QuantityProps) {
  return (
    <div className={styles['product-quantity-c']}>
      <button onClick={onDecrease} className={styles['product-quantity-subtract']}>-</button>
      <h2 className={styles['product-number']}>{quantity}</h2>
      <button  onClick={onIncrease} className={styles['product-quantity-add']}>+</button>
    </div>
  );
}
