import { FC } from 'react';
import { useSelector } from 'react-redux';

import { NotificationsPanel } from 'app/components/template';
import { RootState } from 'app/store/store';

import { Badge, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

import styles from './notifications-button.module.scss';

interface NotificationsButtonProps {
  openMenu: boolean;
  handleMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

export const NotificationsButton: FC<NotificationsButtonProps> = ({
  handleMenuOpen,
  openMenu,
}) => {
  const { unReadedCount } = useSelector(
    (state: RootState) => state.notifications
  );

  return (
    <IconButton
      size="large"
      aria-label="show new notifications"
      id="notifications"
      aria-controls="test"
      onClick={handleMenuOpen}
      color="inherit"
      className={styles.notificationBtn}
    >
      <Badge badgeContent={unReadedCount} color="error">
        <NotificationsIcon className={styles.icon} />
      </Badge>
      {openMenu && <NotificationsPanel />}
    </IconButton>
  );
};
