import { FC, useState } from "react";

import {
  AccountIcon,
  Basket,
  NotificationsButton,
} from "app/components/template";

import styles from "./topbar.module.scss";

export const TopBar: FC = () => {
  const [active, setActive] = useState("");

  return (
    <div className={styles.topBar}>
      <Basket {...{ active: active === "basket", setActive }} />
      <NotificationsButton
        {...{ active: active === "notifications", setActive }}
      />
      <AccountIcon {...{ active: active === "user", setActive }} />
    </div>
  );
};
