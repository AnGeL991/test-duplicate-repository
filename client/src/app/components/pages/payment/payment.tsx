import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, PageHeader } from "app/components/common";
import { Container } from "app/components/layout";
import {
  AddValueFormat,
  PaymentDishList,
  PaymentMethod,
} from "app/components/template";
import { RootState } from "app/store/store";
import { addDiscount, addTip, preparePayment } from "app/store/payment/reducer";
import { setInitialState } from "app/store/order/reducer";

import { setStatus, setMessage, toggleModal } from "app/store/panel/reducer";
import masterCard from "assets/images/mastercard.svg";
import styles from "./payment.module.scss";

const PaymentPage: FC = () => {
  const {
    orders: { placedOrders },
    payment: { dishes, totalPayment, tip, discount, paymentMethod },
  } = useSelector((state: RootState) => state);

  const dispatch = useDispatch();

  const onSubmit = async () => {
    dispatch(toggleModal(true));
    dispatch(setStatus("success"));
    dispatch(setMessage("Dziękujemy za dokonanie płatności "));
    dispatch(setInitialState());
  };

  dispatch(preparePayment(placedOrders));

  return (
    <Container>
      <PageHeader title="Płatności" />
      <div className={styles.paymentDetails}>
        <div className={styles.dishBox}>
          <PaymentDishList dishes={dishes} />
          <div className={styles.tipsBox}>
            <AddValueFormat
              text="Mam kod rabatowy:"
              btn="Dodaj rabat"
              placeholder="Kod rabatowy"
              action={addDiscount}
            />
            <AddValueFormat
              text="Zostaw napiwek"
              btn="Dodaj napiwek"
              placeholder="0 zł"
              action={addTip}
            />
          </div>
        </div>
        <div className={styles.totalPayment}>
          <div className={styles.totalPaymentRow}>
            <span>Płatność</span>
            <strong>{totalPayment.toFixed(2)} zł</strong>
          </div>
          <div className={styles.totalPaymentRow}>
            <span>Kod rabatowy</span>
            <strong>- {discount.toFixed(2)} zł</strong>
          </div>
          <div className={styles.totalPaymentRow}>
            <span>Napiwek</span>
            <strong>{tip.toFixed(2)} zł</strong>
          </div>
        </div>
        <div className={styles.border} />
        <div className={styles.paymentBox}>
          <div className={styles.totalPaymentWrapper}>
            <div className={styles.totalPaymentValue}>
              <span>Suma</span>
              <strong>{(totalPayment + tip - discount).toFixed(2)} zł</strong>
            </div>
          </div>
          <div className={styles.paymentMethods}>
            <PaymentMethod
              type="CreaditCard"
              cardNumber="xxxx xxxx xxxx 21321"
              expiryDate="09/25"
              image={masterCard}
              active={paymentMethod === "CreaditCard"}
            />
            <PaymentMethod
              type="PayU"
              email="adrianmarkuszewski@wp.pl"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/PayU.svg/1280px-PayU.svg.png"
              active={paymentMethod === "PayU"}
            />
            <PaymentMethod
              type="Paypal"
              email="adrianmarkuszewski@wp.pl"
              image="https://www.paypalobjects.com/webstatic/icon/pp258.png"
              active={paymentMethod === "Paypal"}
            />
          </div>
        </div>
        <footer className={styles.footer}>
          <Button className={styles.btn} onClick={onSubmit}>
            Potwierdz płatność
          </Button>
        </footer>
      </div>
    </Container>
  );
};
export default PaymentPage;
