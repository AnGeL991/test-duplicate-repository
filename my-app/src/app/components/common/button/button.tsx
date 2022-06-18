import classNames from "classnames";
import { FC } from "react";
import styles from "./button.module.scss";

export enum ButtonTypes {
  reset = "reset",
  submit = "submit",
  button = "button",
}

interface ButtonType {
  text?: string;
  type?: ButtonTypes;
  onClick?: () => void;
  className?: string;
}

export const Button: FC<ButtonType> = ({
  type = ButtonTypes.button,
  onClick,
  text,
  children,
  className = "",
}) => {
  return (
    <button
      className={classNames(styles.button, { [className]: className })}
      {...{ type, onClick }}
    >
      {text} {children}
    </button>
  );
};
