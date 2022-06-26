import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";

import ContactIcon from "assets/images/contact.svg";
import MenuIcon from "assets/images/menu-icon.svg";
import PaymentIcon from "assets/images/payment.svg";
import ReviewIcon from "assets/images/review.svg";
import WaiterIcon from "assets/images/waiter.svg";
import OrderIcon from "assets/images/order-icon.svg";
import LogoSmall from "assets/images/logo-small.svg";
import classNames from "classnames";
import styles from "./asideBar.module.scss";

const MainNav = [
  { icon: MenuIcon, name: "Menu", path: "/menu" },
  { icon: OrderIcon, name: "Zamówienia", path: "/order" },
  { icon: ReviewIcon, name: "Opienie", path: "/review" },
  { icon: PaymentIcon, name: "Płatności", path: "/payment" },
  { icon: WaiterIcon, name: "Kelner", path: "/waiter" },
  { icon: ContactIcon, name: "Kontakt", path: "/contact" },
];

export const AsideBar: FC = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <aside className={styles.aside}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img src={LogoSmall} alt="Logo" />
        </NavLink>
      </div>
      <nav>
        <ul className={styles.list}>
          {MainNav.map(({ icon, name, path }, index) => (
            <li
              key={index}
              className={classNames(styles.item, {
                [styles.active]: pathName === path,
              })}
            >
              <NavLink to={path}>
                <img src={icon} alt={name} className={styles.image} />
                <span>{name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
