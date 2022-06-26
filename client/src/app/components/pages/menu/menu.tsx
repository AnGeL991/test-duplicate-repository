import { FC, useState, useEffect } from "react";
import { Container } from "app/components/layout/container";
import { NavMenu } from "app/components/template/nav/menu/navMenu";
import { Dish } from "app/components/template/dish/dish";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/store/store";
import { setInventoryData } from "app/store/inventory/reducer";

import Inventory from "app/db/menu.json";
import styles from "./menu.module.scss";

const Menu: FC = () => {
  const [active, setActive] = useState("starters");

  const { inventory } = useSelector((state: RootState) => state.inventory);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInventoryData(Inventory.menu));
  }, [dispatch]);

  const displayMenu = inventory.map((dish, index) => {
    if (dish.type === active) {
      return <Dish key={index} {...dish} />;
    }
    return null;
  });

  return (
    <div className={styles.menu}>
      <Container className={styles.container}>
        <NavMenu {...{ active, setActive }} />
      </Container>
      <Container>
        <div className={styles.card}>{displayMenu}</div>
      </Container>
    </div>
  );
};
export default Menu;
