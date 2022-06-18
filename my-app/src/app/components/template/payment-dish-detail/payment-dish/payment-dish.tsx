import { FC } from "react";

import styles from "./payment-dish.module.scss";

interface PaymentDishType {
  image: string;
  title: string;
  price: string;
  amount: number;
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
        <img src={image} alt="test" className={styles.image} />
      </div>
      <div className={styles.infoBox}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.priceBox}>
          <span>Price:</span> <strong>${price}</strong>
          <span>Qty:</span> <strong>{amount}</strong>
          <div className={styles.total}>
            <span>Total</span>
            <strong>${(Number(price) * amount).toFixed(2)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
