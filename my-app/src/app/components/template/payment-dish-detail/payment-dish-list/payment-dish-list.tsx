import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { PaymentDish } from 'app/components/template';
import { RootState } from 'app/store/store';

import styles from './payment-dish-list.module.scss';

interface PaymentDishListProps {
  dishes: any[];
}

export const PaymentDishList: FC<PaymentDishListProps> = ({ dishes }) => {
  return (
    <div className={styles.paymentDishList}>
      {dishes?.map((dish) => (
        <PaymentDish {...dish} />
      ))}
    </div>
  );
};
