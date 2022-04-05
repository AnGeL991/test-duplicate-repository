import classNames from 'classnames';
import { FC } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import styles from './field.module.scss';

interface FieldProps {
  type: string;
  name: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  label?: string;
  className?: string;
}

export const Field: FC<FieldProps> = ({
  type,
  name,
  placeholder,
  register,
  label,
  className = '',
}) => {
  return (
    <div className={classNames(styles.field, { [className]: className })}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
};
