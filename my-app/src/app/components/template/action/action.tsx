import { FC } from "react";
import { Dialog } from "app/components/template";
import ErrorIcon from "assets/images/error-ikon.svg";
import SuccessIcon from "assets/images/success-check.svg";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/store/store";
import { toggleModal } from "app/store/panel/reducer";

import styles from "./action.module.scss";
import classNames from "classnames";

export const Action: FC = () => {
  const { status, massage, open } = useSelector(
    (state: RootState) => state.panel
  );

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleModal(false));
  };

  const icon = status === "error" ? ErrorIcon : SuccessIcon;

  return (
    <Dialog open={open} handleCloseDialog={handleClose}>
      <div className={classNames(styles.wrapper, [styles[status]])}>
        <img src={icon} alt="icon" className={styles.image} />
        <span className={styles.text}>{massage}</span>
      </div>
    </Dialog>
  );
};
