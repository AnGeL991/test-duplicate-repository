import { FC } from "react";
import { useDispatch } from "react-redux";

import {
  setReadedNotification,
  setUnReadCount,
} from "app/store/notifications/reducer";

import { Badge } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import InfoIcon from "@mui/icons-material/Info";

import classNames from "classnames";
import styles from "./notifications-item.module.scss";

type Status = "error" | "info" | "success";

interface NotificationsItemProps {
  id: string;
  status: Status;
  time: string;
  message: string;
  readed: boolean;
}

export const NotificationsItem: FC<NotificationsItemProps> = ({
  id,
  status,
  time,
  message,
  readed,
}) => {
  const dispatch = useDispatch();

  const handleReadNotification = () => {
    dispatch(setReadedNotification(id));
    dispatch(setUnReadCount());
  };

  const displayIcon = () => {
    switch (status) {
      case "error": {
        return <ErrorIcon />;
      }
      case "success": {
        return <CheckCircleOutlineIcon />;
      }
      default: {
        return <InfoIcon />;
      }
    }
  };

  return (
    <li
      className={classNames(styles.item, styles[status])}
      onClick={handleReadNotification}
    >
      <span className={classNames(styles.icon, styles[status])}>
        {displayIcon()}
      </span>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <strong className={classNames(styles.status, styles[status])}>
            {status}
          </strong>
        </header>
        <span className={classNames(styles.message, styles[status])}>
          {message}
        </span>
        <span className={styles.time}>{time}</span>
      </div>
    </li>
  );
};
