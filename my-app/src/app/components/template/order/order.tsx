import classNames from 'classnames';
import { FC, Dispatch, SetStateAction } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Button } from 'app/components/common/button/button';
import styles from './order.module.scss';

interface OrderType {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const Order: FC<OrderType> = ({ open, setOpen }) => {
  return (
    <div className={classNames(styles.order, { [styles.active]: open })}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h3>Order</h3>
          <AiOutlineClose
            onClick={() => setOpen(false)}
            className={styles.icon}
          />
        </header>
        <div className={styles.wrapper}>
          <div className={styles.product}>
            <div className={styles.imageBox}>
              <img
                src={
                  'https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'
                }
                alt="product"
                className={styles.image}
              />
            </div>
            <div className={styles.info}>
              <span className={styles.title}>Steak XXL</span>
              <div className={styles.statusBox}>
                <span className={styles.text}>status</span>
                <span className={styles.status}>In prepare</span>
              </div>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.imageBox}>
              <img
                src={
                  'https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'
                }
                alt="product"
                className={styles.image}
              />
            </div>
            <div className={styles.info}>
              <span className={styles.title}>Steak XXL</span>
              <div className={styles.statusBox}>
                <span className={styles.text}>status</span>
                <span className={styles.status}>In prepare</span>
              </div>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.imageBox}>
              <img
                src={
                  'https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'
                }
                alt="product"
                className={styles.image}
              />
            </div>
            <div className={styles.info}>
              <span className={styles.title}>Steak XXL</span>
              <div className={styles.statusBox}>
                <span className={styles.text}>status</span>
                <span className={styles.status}>In prepare</span>
              </div>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <Button className={styles.btn}>Waiter</Button>
          <Button className={styles.btn}>Payment</Button>
        </footer>
      </div>
    </div>
  );
};
