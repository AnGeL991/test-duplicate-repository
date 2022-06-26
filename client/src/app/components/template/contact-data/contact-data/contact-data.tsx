import { FC } from "react";

import contactImage from "assets/images/contact-image.svg";

import classNames from "classnames";

import styles from "./contact-data.module.scss";

export const ContactData: FC = () => {
  return (
    <div className={styles.contactData}>
      <img src={contactImage} alt="wine" className={styles.image} />
      <div className={styles.bgc} />
      <div className={styles.content}>
        <div className={styles.openHours}>
          <h3 className={styles.title}>Godziny otwarcia</h3>
          <div className={styles.item}>
            <span className={styles.yellow}>Poniedziałek - Czwartek:</span>
            <span> 12:00 - 23:00</span>
          </div>
          <div className={styles.item}>
            <span className={styles.yellow}>Piątek:</span>
            <span> 13:00 - 01:00</span>
          </div>
          <div className={styles.item}>
            <span className={styles.yellow}>Sobota:</span>
            <span> 13:00 - 24:00</span>
          </div>
          <div className={styles.item}>
            <span className={styles.yellow}>Niedziela:</span>
            <span> 13:00 - 22:00</span>
          </div>
        </div>
        <div className={styles.personalData}>
          <h3 className={styles.title}>Dane Kontaktowe</h3>
          <h3 className={classNames(styles.title, styles.yellow)}>
            STEAK HOUSE
          </h3>
          <div className={styles.item}>
            <span>Email:</span>
            <span> steakHouse@email.com</span>
          </div>
          <div className={styles.item}>
            <span>Tel:</span>
            <span> +48 123 456 789</span>
          </div>
          <div className={styles.item}>
            <span>Testowa 115,</span>
            <span> 00-000 Warszawa</span>
          </div>
        </div>
      </div>
    </div>
  );
};
