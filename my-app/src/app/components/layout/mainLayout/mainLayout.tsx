import { Notifications } from 'app/components/template';
import { FC } from 'react';
import { AsideBar } from '../asideBar';
import { TopBar } from '../topBar';
import styles from './mainLayout.module.scss';
import { Box } from '@mui/material';
export const MainLayout: FC = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.mainLayout}>
      <TopBar />
      <AsideBar />
      <div className={styles.container}>{children}</div>
      <Notifications />
    </Box>
  );
};
