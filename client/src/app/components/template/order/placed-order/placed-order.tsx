import { FC } from "react";
import styles from "./placed-order.module.scss";

interface PlacedOrderProps {
  image: string;
  name: string;
  amount: number;
  price: string | number;
  status: string;
}

export const PlacedOrder: FC<PlacedOrderProps> = ({
  image,
  name,
  price,
  status,
}) => {
  return (
    <div className={styles.placedOrder}>
      <div className={styles.imageBox}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.infoBox}>
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.details}>
          <div className={styles.status}>
            <span>Status</span>
            <strong>{status}</strong>
          </div>
          <div className={styles.price}>
            <span>Cena</span>
            <strong>{price} zł</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
