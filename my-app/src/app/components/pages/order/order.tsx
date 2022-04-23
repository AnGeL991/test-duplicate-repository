import { FC } from 'react';
import { PageHeader } from 'app/components/common';
import { Container } from 'app/components/layout';
import { OrderDetailsList, OrderDetailsPayment } from 'app/components/template';

import styles from './order.module.scss';

export const OrderPage: FC = () => {
  return (
    <Container className={styles.orderDetails}>
      <PageHeader title="Order details" />
      <OrderDetailsList />
      <OrderDetailsPayment />
    </Container>
  );
};
