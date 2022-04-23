import { FC, useLayoutEffect } from 'react';
import { Button } from 'app/components/common';
import { OrderDetailsPaymentBorder } from '../order-details-payment-border';
import styles from './order-details-payment.module.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store/store';
import { countTotalPayment } from 'app/store/order/reducer';
export const OrderDetailsPayment: FC = () => {
  const { totalPayment, orders } = useSelector(
    (state: RootState) => state.orders
  );
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(countTotalPayment());
  }, [dispatch, orders]);

  return (
    <div className={styles.orderDetailsPayment}>
      <OrderDetailsPaymentBorder />
      <div className={styles.title}>Total Payment</div>
      <div className={styles.totalPrice}>${totalPayment.toFixed(2)}</div>
      <div className={styles.boxBtn}>
        <NavLink to="/menu">
          <Button className={styles.btn}>Back to menu</Button>
        </NavLink>
        <NavLink to="/waiter">
          <Button className={styles.btn}>Call to waiter</Button>
        </NavLink>
        <NavLink to="/payment">
          <Button className={styles.btn}>Payment</Button>
        </NavLink>
      </div>
    </div>
  );
};
