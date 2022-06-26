import { FC } from 'react';

import styles from './tableInfo.module.scss';

interface TableInfoType {
  tableNumber: number | string;
  amountOfPlace: number | string;
}

export const TableInfo: FC<TableInfoType> = ({
  tableNumber,
  amountOfPlace,
}) => {
  return (
    <div className={styles.tableInfo}>
      <div className={styles.info}>
        Table number:<span>{tableNumber}</span>
      </div>
      <div className={styles.info}>
        Amount of place:<span>{amountOfPlace}</span>
      </div>
    </div>
  );
};
