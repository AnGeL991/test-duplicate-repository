import { FC } from "react";
import OrderIcon from "assets/images/purchase-order.svg";
import { Order } from "../order/order/order";

import styles from "./basket.module.scss";

interface BasketTyp {
  active: boolean;
  setActive: (option: string) => void;
}

export const Basket: FC<BasketTyp> = ({ active, setActive }) => {
  const handleOpenBasket = () => {
    if (!active) {
      return setActive("basket");
    }
    setActive("");
  };

  return (
    <div className={styles.basket}>
      <img
        src={OrderIcon}
        className={styles.icon}
        alt="order icon"
        onClick={handleOpenBasket}
      />

      <Order open={active} />
    </div>
  );
};
