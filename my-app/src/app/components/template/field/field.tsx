import { FC } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputBase from "@mui/material/InputBase";
import classNames from "classnames";
import styles from "./field.module.scss";

interface FieldProps {
  type: string;
  name: string;
  id?: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  label?: string;
  className?: string;
  error?: { message: string; type: string };
  defaultValue?: string | number;
  disabled?: boolean;
}

export const Field: FC<FieldProps> = ({
  type,
  name,
  placeholder,
  register,
  label,
  id,
  className = "",
  error,
  defaultValue,
}) => {
  return (
    <div className={classNames(styles.field, { [className]: className })}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(name)}
      />
      {error && <span className={styles.error}>{error.message}</span>}
    </div>
  );
};
