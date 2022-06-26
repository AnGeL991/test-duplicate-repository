import { FC } from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import { Alert, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/store';

import styles from './notifications.module.scss';

export const Notifications: FC = () => {
  const { message, type } = useSelector(
    (state: RootState) => state.notifications
  );

  return ReactDom.createPortal(
    <div className={classNames(styles.notifications)}>
      {type && (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity={type} color={type} className={styles.alert}>
            {message}
          </Alert>
        </Stack>
      )}
    </div>,
    document.getElementById('root') as HTMLElement
  );
};
