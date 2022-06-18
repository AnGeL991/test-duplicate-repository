import { FC, ReactNode } from "react";
import classNames from "classnames";
import styles from "./popup.module.scss";

interface PopUpProps {
  header?: string | ReactNode;
  footer?: string | ReactNode;
  open: boolean;
}

export const PopUp: FC<PopUpProps> = ({ children, header, footer, open }) => {
  return (
    <div className={classNames(styles.popUp, { [styles.show]: open })}>
      {header && <header className={styles.header}>{header}</header>}
      <div className={styles.content}>{children}</div>
      {footer && <footer className={styles.footer}>{footer}</footer>}
    </div>
  );
};
