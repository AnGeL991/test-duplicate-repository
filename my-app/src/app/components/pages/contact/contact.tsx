import { FC } from "react";
import { ContactData, ContactReservation } from "app/components/template";
import Logo from "assets/images/contact-logo.svg";
import styles from "./contact.module.scss";

const Contact: FC = () => {
  return (
    <section className={styles.contact}>
      <ContactData />
      <img src={Logo} alt="logo" className={styles.image} />
      <ContactReservation />
    </section>
  );
};

export default Contact;
