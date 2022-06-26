import { FC } from "react";
import { NotificationsItem } from "app/components/template";
import styles from "./notifications-panel.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "app/store/store";
import { PopUp } from "../../popup";

interface NotificationsPanelProps {
  open: boolean;
}

export const NotificationsPanel: FC<NotificationsPanelProps> = ({ open }) => {
  const { notifications } = useSelector(
    (state: RootState) => state.notifications
  );

  return (
    <PopUp header="Notifications" open={open}>
      <NotificationsItem
        id={"1"}
        status={"error"}
        time={"5 min ago"}
        message={"Nie udało się dodac twojego zamówienia"}
        readed={false}
      />
      <NotificationsItem
        id={"2"}
        status={"success"}
        time={"5 min ago"}
        message={"Nie udało się dodac twojego zamówienia"}
        readed={false}
      />
    </PopUp>
  );
};
