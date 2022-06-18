import { FC } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  incrementAmount,
  decrementAmount,
  removeDish,
} from "app/store/order/reducer";

import { useDispatch } from "react-redux";

import styles from "./order-dish.module.scss";

interface OrderDishProps {
  image: string;
  name: string;
  amount: number;
  price: string | number;
  id: string;
}

export const OrderDish: FC<OrderDishProps> = ({
  image,
  name,
  amount,
  price,
  id,
}) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementAmount({ amount, id }));
  };

  const handleDecrement = () => {
    dispatch(decrementAmount({ amount, id }));
  };

  const handleRemoveDish = () => {
    dispatch(removeDish(id));
  };

  return (
    <div className={styles.orderDish}>
      <div className={styles.imageBox}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.infoBox}>
        <h3 className={styles.title}>{name}</h3>
        <div>
          <div className={styles.amount}>
            <span>Amount</span>
            <div className={styles.amountCount}>
              <span className={styles.dicrement} onClick={handleDecrement}>
                -
              </span>
              <strong>{amount}</strong>
              <span className={styles.increment} onClick={handleIncrement}>
                +
              </span>
              <RiDeleteBin6Line
                className={styles.icon}
                onClick={handleRemoveDish}
              />
            </div>
          </div>
          <div className={styles.price}>
            <span>price</span>
            <strong>${price}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
