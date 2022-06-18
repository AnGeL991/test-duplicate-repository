import { FC, useState } from "react";

import UserIcon from "assets/images/user.svg";
import styles from "./account-icon.module.scss";
import { UserPopup, UserLogin } from "app/components/template";
import { UserRegister } from "../user-register";

interface AccountIconProps {
  active: boolean;
  setActive: (option: string) => void;
}

type ModalType = "login" | "register";

export const AccountIcon: FC<AccountIconProps> = ({ active, setActive }) => {
  const [openModal, setOpenModal] = useState<ModalType | null>(null);
  const handleOpenBasket = () => {
    if (!active) {
      return setActive("user");
    }
    setActive("");
  };

  const handleOpenModal = (modal: ModalType) => {
    setOpenModal(modal);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  return (
    <div className={styles.accountIcon}>
      <img
        src={UserIcon}
        className={styles.icon}
        alt="user icon"
        onClick={handleOpenBasket}
      />
      <UserPopup active={active} handleOpenModal={handleOpenModal} />
      <UserLogin
        open={openModal === "login"}
        handleClose={handleCloseModal}
        handleOpenRegister={() => handleOpenModal("register")}
      />
      <UserRegister
        open={openModal === "register"}
        handleClose={handleCloseModal}
      />
    </div>
  );
};
