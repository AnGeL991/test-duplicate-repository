import { FC } from 'react';
import { NotificationsItem } from 'app/components/template';
import styles from './notifications-panel.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/store';

export const NotificationsPanel: FC = () => {
  const { notifications } = useSelector(
    (state: RootState) => state.notifications
  );

  return (
    <div className={styles.notificationsPanel}>
      <header>
        <h3 className={styles.title}>Notifications</h3>
      </header>
      <ul className={styles.list}>
        {notifications.map((notification) => (
          <NotificationsItem key={notification.id} {...notification} />
        ))}
      </ul>
    </div>
  );
};
