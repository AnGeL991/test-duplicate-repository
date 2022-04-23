import { FC } from 'react';
import { OrderDetailsDish } from 'app/components/template';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/store';
import styles from './order-details-list.module.scss';

export const OrderDetailsList: FC = () => {
  const { loading, orders } = useSelector((state: RootState) => state.orders);

  return (
    <div className={styles.orderDetailsList}>
      {orders.map((dish) => (
        <OrderDetailsDish {...dish} />
      ))}
    </div>
  );
};
