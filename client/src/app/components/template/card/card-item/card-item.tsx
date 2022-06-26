import { FC } from 'react';

import classNames from 'classnames';
import styles from './card-item.module.scss';

interface CardItemProps {
  image: string;
  name: string;
  status: string;
  amount: number;
}

export const CardItem: FC<CardItemProps> = ({
  status,
  image,
  name,
  amount,
}) => {
  return (
    <li className={styles.cardItem}>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.box}>
        <span className={styles.title}>{name}</span>
        <div className={styles.info}>
          <span className={styles.amount}>
            amount: <strong>{amount}</strong>
          </span>

          <span className={classNames(styles.status, styles[status])}>
            Status: <strong>{status}</strong>
          </span>
        </div>
      </div>
    </li>
  );
};
