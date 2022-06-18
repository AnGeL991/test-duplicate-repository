import { FC } from "react";
import { PaymentDish } from "app/components/template";
import styles from "./payment-dish-list.module.scss";

interface PaymentDishListProps {
  dishes: any[];
}

export const PaymentDishList: FC<PaymentDishListProps> = ({ dishes }) => {
  const displayDishes = dishes.length ? (
    dishes?.map((dish) => <PaymentDish key={dish.id} {...dish} />)
  ) : (
    <div className={styles.empty}>Nie posiadasz zadnych zamówień</div>
  );

  return <div className={styles.paymentDishList}>{displayDishes}</div>;
};
