import { FC } from "react";
import ReactDom from "react-dom";
import classNames from "classnames";
import { AiOutlineClose } from "react-icons/ai";

import styles from "./modal.module.scss";

interface DialogProps {
  open: boolean;
  handleCloseDialog: () => void;
  label?: string;
  closeIcon?: boolean;
  closeButton?: boolean;
}

export const Dialog: FC<DialogProps> = ({
  open,
  handleCloseDialog,
  label,
  children,
}) => {
  return ReactDom.createPortal(
    <div className={classNames(styles.modal, { [styles.show]: open })}>
      <div className={styles.modalContainer}>
        {label && (
          <header className={classNames(styles.modalHeader)}>
            <span className={styles.label}>{label}</span>
          </header>
        )}
        <AiOutlineClose
          className={styles.icon}
          color="#94111F"
          onClick={handleCloseDialog}
        />
        <div className={styles.body}>{children}</div>
      </div>
    </div>,
    document.getElementById("root") as HTMLElement
  );
};
