import classNames from "classnames";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { setPaymentMethod } from "app/store/payment/reducer";
import styles from "./payment-method.module.scss";

type PaymentType = "Paypal" | "PayU" | "CreaditCard";

interface PaymentMethodProps {
  type: PaymentType;
  image: string;
  cardNumber?: string;
  expiryDate?: string;
  email?: string;
  active?: boolean;
}

export const PaymentMethod: FC<PaymentMethodProps> = ({
  type,
  cardNumber,
  expiryDate,
  email,
  image,
  active,
}) => {
  const dispatch = useDispatch();

  const handleSelectPayment = () => {
    dispatch(setPaymentMethod(type));
  };

  const displayCardDetails =
    cardNumber && expiryDate ? (
      <>
        <span>{cardNumber}</span>
        <span>{expiryDate}</span>
      </>
    ) : null;

  const displayEmail = email ? <span>{email}</span> : null;

  return (
    <div
      onClick={handleSelectPayment}
      className={classNames(styles.paymentMethod, { [styles.active]: active })}
    >
      <header className={styles.paymentType}>{type}</header>
      <img src={image} alt={type} className={styles.image} />
      <div className={styles.details}>
        {displayCardDetails}
        {displayEmail}
      </div>
    </div>
  );
};
