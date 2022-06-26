import { FC } from 'react';
import { CardItem } from 'app/components/template';

import styles from './card-panel.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/store';

export const CardPanel: FC = () => {
  const { orders, totalPayment } = useSelector(
    (state: RootState) => state.orders
  );

  return (
    <div className={styles.cardPanel}>
      <header>
        <h3 className={styles.title}>Your Orders</h3>
      </header>
      <ul className={styles.list}>
        {orders.map((order) => (
          <CardItem key={order.id} {...order} />
        ))}
      </ul>
      <div className={styles.totalPaymentbox}>
        <span> Total Payment</span> <strong>${totalPayment.toFixed(2)}</strong>
      </div>
    </div>
  );
};
