import { FC } from 'react';

import styles from './payment-method.module.scss';

type PaymentType = 'Paypal' | 'PayU' | 'CreaditCard';

interface PaymentMethodProps {
  type: PaymentType;
  image: string;
  cardNumber?: string;
  expiryDate?: string;
  email?: string;
}

export const PaymentMethod: FC<PaymentMethodProps> = ({
  type,
  cardNumber,
  expiryDate,
  email,
  image = 'https://www.paypalobjects.com/webstatic/icon/pp258.png',
}) => {
  const displayCardDetails =
    cardNumber && expiryDate ? (
      <>
        <span>{cardNumber}</span>
        <span>{expiryDate}</span>
      </>
    ) : null;

  const displayEmail = email ? <span>{email}</span> : null;

  return (
    <div className={styles.paymentMethod}>
      <header className={styles.paymentType}>{type}</header>
      <img src={image} alt={type} className={styles.image} />
      <div className={styles.details}>
        {displayCardDetails}
        {displayEmail}
      </div>
    </div>
  );
};
