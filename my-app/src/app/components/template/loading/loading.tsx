import { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './loading.module.scss';

export const Loading: FC = () => {
  return (
    <div className={styles.loading}>
      <CircularProgress />
    </div>
  );
};
