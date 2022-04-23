import { FC } from 'react';
import { PaymentDish } from 'app/components/template';

import styles from './payment-dish-list.module.scss';

interface PaymentDishListProps {
  dish?: any[];
}

export const PaymentDishList: FC<PaymentDishListProps> = ({ dish }) => {
  return (
    <div className={styles.paymentDishList}>
      <PaymentDish />
      <PaymentDish />
    </div>
  );
};
