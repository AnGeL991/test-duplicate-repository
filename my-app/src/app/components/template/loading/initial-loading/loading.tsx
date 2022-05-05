import { FC } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './loading.module.scss';

export const Loading: FC = () => {
  return (
    <div className={styles.loading}>
      <Backdrop sx={{ color: '#fff' }} open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};
