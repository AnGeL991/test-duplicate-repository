import { FC } from "react";
import { PageHeader } from "app/components/common";
import { Container } from "app/components/layout";

import styles from "./order.module.scss";

const OrderPage: FC = () => {
  return (
    <Container className={styles.orderDetails}>
      <PageHeader title="Order details" />
      Work in Progress
    </Container>
  );
};
export default OrderPage;
