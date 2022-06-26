import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PopUp } from "app/components/template";
import { RootState } from "app/store/store";
import { logOut } from "app/store/auth/reducer";

import styles from "./user-popup.module.scss";
import { useNavigate } from "react-router";

type ModalType = "login" | "register";

interface UserPopupProps {
  active: boolean;
  handleOpenModal: (modal: ModalType) => void;
}

export const UserPopup: FC<UserPopupProps> = ({ active, handleOpenModal }) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/");
    dispatch(logOut());
  };

  const menu = isAuthenticated ? (
    <>
      <li className={styles.item} onClick={() => navigate("/account")}>
        Profil
      </li>
      <li className={styles.item} onClick={handleLogOut}>
        Wyloguj się
      </li>
    </>
  ) : (
    <>
      <li className={styles.item} onClick={() => handleOpenModal("login")}>
        Zaloguj się
      </li>
      <li className={styles.item} onClick={() => handleOpenModal("register")}>
        Zarejestruj się
      </li>
    </>
  );

  return (
    <PopUp open={active}>
      <ul className={styles.list}>{menu}</ul>
    </PopUp>
  );
};
