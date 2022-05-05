import { FC } from 'react';

import { Button, PageHeader, SelectForm } from 'app/components/common';
import { Container } from 'app/components/layout';

import styles from './call-waiter.module.scss';

export const CallWaiter: FC = () => {
  return (
    <section className={styles.callWaiter}>
      <Container className={styles.callWaiterCantainer}>
        <PageHeader title="Call Waiter" />
        <div className={styles.wrapper}>
          <header>
            <h3 className={styles.title}>What kind of support do you need?</h3>
          </header>
          <SelectForm
            id="callWaiter"
            options={[
              { value: 'other', displayValue: 'other' },
              { value: 'Payments', displayValue: 'Payments' },
              { value: 'Dish', displayValue: 'Dish' },
            ]}
            defaultValue="Select"
            className={styles.select}
          />
          <Button className={styles.btn}>Call the waiter</Button>
        </div>
      </Container>
    </section>
  );
};
