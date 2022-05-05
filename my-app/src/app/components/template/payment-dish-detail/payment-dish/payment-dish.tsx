import { FC } from 'react';

import styles from './payment-dish.module.scss';

interface PaymentDishType {
  image: string;
  title: string;
  price: string;
  amount: string;
}

export const PaymentDish: FC<PaymentDishType> = ({
  image,
  title,
  price,
  amount,
}) => {
  return (
    <div className={styles.paymentDish}>
      <div className={styles.imageBox}>
        <img
          src="https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RlYWt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="test"
          className={styles.image}
        />
      </div>
      <div className={styles.infoBox}>
        <h3 className={styles.title}>title</h3>
        <div className={styles.priceBox}>
          <span>Price:</span> <strong>$39.95</strong>
          <span>Qty:</span> <strong>1</strong>
          <div className={styles.total}>
            <span>Total</span> <strong>$39.95</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
