import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, PageHeader } from 'app/components/common';
import { Container } from 'app/components/layout';
import {
  AddValueFormat,
  PaymentDishList,
  PaymentMethod,
} from 'app/components/template';
import { RootState } from 'app/store/store';
import { addDiscount, addTip, preparePayment } from 'app/store/payment/reducer';

import styles from './payment.module.scss';

export const PaymentPage: FC = () => {
  const {
    orders: { orders },
    payment: { dishes, totalPayment, tip, discount },
  } = useSelector((state: RootState) => state);

  const dispatch = useDispatch();

  dispatch(preparePayment(orders));

  return (
    <Container>
      <PageHeader title="Payment" />
      <div className={styles.paymentDetails}>
        <div className={styles.dishBox}>
          <PaymentDishList dishes={dishes} />
          <div className={styles.tipsBox}>
            <AddValueFormat
              text="I have a discount code:"
              btn="Add discount"
              placeholder="discount code"
              action={addDiscount}
            />
            <AddValueFormat
              text="Take tips for staff:"
              btn="Add tips"
              placeholder="$0"
              action={addTip}
            />
          </div>
        </div>
        <div className={styles.totalPayment}>
          <div className={styles.totalPaymentRow}>
            <span>Payment</span>
            <strong>${totalPayment.toFixed(2)}</strong>
          </div>
          <div className={styles.totalPaymentRow}>
            <span>Discount</span>
            <strong>${discount.toFixed(2)}</strong>
          </div>
          <div className={styles.totalPaymentRow}>
            <span>Tips</span>
            <strong>${tip.toFixed(2)}</strong>
          </div>
        </div>
        <div className={styles.border} />
        <div className={styles.paymentBox}>
          <div className={styles.totalPaymentWrapper}>
            <div className={styles.totalPaymentValue}>
              <span>Total Payment</span>{' '}
              <strong>${(totalPayment + tip + discount).toFixed(2)}</strong>
            </div>
          </div>
          <div className={styles.paymentMethods}>
            <PaymentMethod
              type="CreaditCard"
              cardNumber="xxxx xxxx xxxx 21321"
              expiryDate="09/25"
              image="https://pngset.com/images/mc-history-timeline-logo-mastercard-svg-symbol-trademark-text-graphics-transparent-png-2742410.png"
            />
            <PaymentMethod
              type="PayU"
              email="adrianmarkuszewski@wp.pl"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/PayU.svg/1280px-PayU.svg.png"
            />
            <PaymentMethod
              type="Paypal"
              email="adrianmarkuszewski@wp.pl"
              image="https://www.paypalobjects.com/webstatic/icon/pp258.png"
            />
          </div>
        </div>
        <footer className={styles.footer}>
          <Button className={styles.btn}>Confirm Payment</Button>
        </footer>
      </div>
    </Container>
  );
};
