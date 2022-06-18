import { FC } from "react";
import { NavLink } from "react-router-dom";
import { RootState } from "../../../store/store";
import {} from "react-icons";
import { Panel } from "../../template/panel/panel";
import { useSelector, useDispatch } from "react-redux";
import HomeImage from "assets/images/home-image.svg";
import ArrowImage from "assets/images/arrow.svg";
import YellowArrow from "assets/images/yellow-arrow.svg";
//import { userLoading, logOut, setToken } from '../../../store/auth/reducer';

import styles from "./home.module.scss";

const Home: FC = () => {
  const { loading, token } = useSelector((state: RootState) => state.auth);
  // const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.bgc} />
      <img src={HomeImage} className={styles.image} alt="home img" />
      <header className={styles.upSection}>
        <h3 className={styles.title}>Dream steak house</h3>
        <span className={styles.description}>
          Restauracja to nowatorski steak house łączący w sobie nowojorską
          klasykę z elementaki kuchni europejskiej
        </span>
        <NavLink to="/menu">
          <button className={styles.btn}>
            Menu
            <img src={ArrowImage} alt="arrowImage" className={styles.arrow} />
          </button>
        </NavLink>
      </header>
      <div className={styles.downSection}>
        <div className={styles.info}>
          <span className={styles.amount}>254</span>
          <span className={styles.infoText}>obsłuzonych klientów</span>
        </div>
        <div className={styles.info}>
          <span className={styles.amount}>952</span>
          <span className={styles.infoText}>usmażonych steków</span>
        </div>
        <div className={styles.info}>
          <span className={styles.amount}>21</span>
          <span className={styles.infoText}>dań w menu</span>
        </div>
        <NavLink to="/contact">
          <button className={styles.contactBtn}>
            <img src={YellowArrow} alt="arrowImage" className={styles.arrow} />
            Kontakt
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
