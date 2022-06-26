import { FC, Fragment } from 'react';
import styles from './order-details-payment-border.module.scss';

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export const OrderDetailsPaymentBorder: FC = () => {
  return (
    <>
      <div className={styles.orderDetailsPaymentBorder}>
        {array.map((value) => (
          <Fragment key={value}>
            <div
              style={{ top: value * 18, left: `calc(${value * 5 + 51}%)` }}
              className={styles.border_left}
            ></div>
            <div
              style={{ top: value * 18, right: `calc(${value * 5 + 51}%)` }}
              className={styles.border_right}
            ></div>
          </Fragment>
        ))}
      </div>
    </>
  );
};
