import { FC } from "react";
import { NotificationsItem } from "app/components/template";

import { useSelector } from "react-redux";
import { RootState } from "app/store/store";
import { PopUp } from "../../popup";
import styles from "./notifications-panel.module.scss";

interface NotificationsPanelProps {
  open: boolean;
}

export const NotificationsPanel: FC<NotificationsPanelProps> = ({ open }) => {
  const { notifications } = useSelector(
    (state: RootState) => state.notifications
  );

  const displayNotifications = notifications.map((note) => (
    <NotificationsItem {...note} />
  ));

  return (
    <PopUp header="Powiadomienia" open={open}>
      {displayNotifications.length ? (
        displayNotifications
      ) : (
        <div className={styles.empty}>
          Nie masz aktualnie zadnych nowych powiadomień
        </div>
      )}
    </PopUp>
  );
};
