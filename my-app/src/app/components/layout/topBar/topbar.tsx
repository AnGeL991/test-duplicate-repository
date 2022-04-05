import { FC } from 'react';

import { TableInfo } from '../../template/tableInfo';
import { User } from '../../template/user/user';
import { Basket } from '../../template/basket/basket';

import styles from './topbar.module.scss';

export const TopBar: FC = () => {
  return (
    <div className={styles.topBar}>
      <TableInfo {...{ tableNumber: 17, amountOfPlace: 4 }} />
      <div className={styles.actionIcon}>
        <Basket />
        <User />
      </div>
    </div>
  );
};
