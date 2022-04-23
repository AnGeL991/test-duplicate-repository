import { FC } from 'react';
import { Button, PageHeader } from 'app/components/common';
import { Container } from 'app/components/layout';
import { AddValueFormat, PaymentDishList } from 'app/components/template';

import styles from './payment.module.scss';

export const PaymentPage: FC = () => {
  return (
    <Container>
      <PageHeader title="Payment" />
      <div className={styles.paymentDetails}>
        <div className={styles.dishBox}>
          <PaymentDishList dish={[]} />
          <AddValueFormat
            text="I have a discount code:"
            btn="Add discount"
            placeholder="discount code"
          />
          <AddValueFormat
            text="Take tips for staff:"
            btn="Add tips"
            placeholder="$0"
          />
        </div>
        <div className={styles.totalPayment}>test</div>
        <div className={styles.border} />
        <div className={styles.paymentBox}>test</div>
        <footer>
          <Button>Confirm Payment</Button>
        </footer>
      </div>
    </Container>
  );
};
