import classNames from "classnames";
import { Dispatch, FC, SetStateAction } from "react";

import styles from "./menu.module.scss";

const NavMenuSchema = [
  { name: "PRZYSTAWKI", value: "starters" },
  { name: "STEKI I FRYTKI", value: "steak" },
  { name: "ZUPY", value: "soup" },
  { name: "MAKARONY", value: "pasta" },
  { name: "SAŁATKI", value: "salad" },
];

interface NavMenuProps {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}

export const NavMenu: FC<NavMenuProps> = ({ active, setActive }) => {
  const displayNavMenu = NavMenuSchema.map(({ name, value }) => (
    <li
      key={name}
      className={classNames(styles.item, {
        [styles.active]: active === value,
      })}
      onClick={() => setActive(value)}
    >
      {name}
    </li>
  ));

  return (
    <header className={styles.navMenu}>
      <nav className={styles.nav}>{displayNavMenu}</nav>
    </header>
  );
};
