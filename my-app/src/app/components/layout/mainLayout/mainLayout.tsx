import { FC } from 'react';
import { AsideBar } from '../asideBar';
import { TopBar } from '../topBar';
import styles from './mainLayout.module.scss';

export const MainLayout: FC = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <TopBar />
      <AsideBar />
      <div className={styles.container}>{children}</div>
    </div>
  );
};
