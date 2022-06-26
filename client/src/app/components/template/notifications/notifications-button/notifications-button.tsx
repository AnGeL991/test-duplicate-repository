import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "app/store/store";

import NotificationsIcon from "assets/images/bell.svg";

import styles from "./notifications-button.module.scss";
import { NotificationsPanel } from "../notifications-panel";

interface NotificationsButtonProps {
  active: boolean;
  setActive: (option: string) => void;
}

export const NotificationsButton: FC<NotificationsButtonProps> = ({
  active,
  setActive,
}) => {
  const { unReadedCount } = useSelector(
    (state: RootState) => state.notifications
  );

  const handleOpenBasket = () => {
    if (!active) {
      return setActive("notifications");
    }
    setActive("");
  };

  return (
    <div className={styles.notifications}>
      <img
        src={NotificationsIcon}
        alt="notifications icon"
        onClick={handleOpenBasket}
      />
      <NotificationsPanel open={active} />
    </div>
  );
};
