import { FC, useState } from 'react';
import { BiDish } from 'react-icons/bi';
import { Order } from '../order/order';

import styles from './basket.module.scss';

interface BasketTyp {}

export const Basket: FC<BasketTyp> = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.basket}>
      <BiDish
        className={styles.icon}
        onClick={() => setOpen((prev) => !prev)}
      />
      <Order {...{ open, setOpen }} />
    </div>
  );
};
