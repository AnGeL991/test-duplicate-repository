import { FC } from "react";
import { PopUp } from "app/components/template";
import { Button } from "app/components/common";

import { OrderDish } from "../order-dish";

import styles from "./order.module.scss";
import { PlacedOrder } from "../placed-order";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/store/store";
import { setPlacedOrder } from "app/store/order/reducer";

interface OrderType {
  open: boolean;
}

export const Order: FC<OrderType> = ({ open }) => {
  const { orders, totalPayment, placedOrders } = useSelector(
    (state: RootState) => state.orders
  );
  const footer = (
    <div className={styles.footer}>
      <span>Suma</span>
      <span>{totalPayment} zł</span>
    </div>
  );

  const dispatch = useDispatch();

  const handleSumitOrder = () => {
    dispatch(setPlacedOrder());
  };

  const displayOrders = orders.map((order) => <OrderDish {...order} />);

  const displayPlacedOrders = placedOrders.map((placedOrder, index) => (
    <PlacedOrder key={index} {...placedOrder} status={"W trakcie"} />
  ));

  const empty = <div className={styles.empty}>Twój koszyk jest pusty</div>;

  return (
    <PopUp header="Twoj wybór" footer={footer} open={open}>
      <div className={styles.content}>
        <div className={styles.list}>{displayOrders}</div>
        {displayOrders.length ? (
          <Button className={styles.btn} onClick={handleSumitOrder}>
            Potwierdz twoje zamówienie
          </Button>
        ) : (
          empty
        )}
      </div>
      {displayPlacedOrders.length ? (
        <div className={styles.placedOrder}>
          <h3 className={styles.title}>Zamówione potrawy</h3>
          <div className={styles.list}>{displayPlacedOrders}</div>
        </div>
      ) : null}
    </PopUp>
  );
};
