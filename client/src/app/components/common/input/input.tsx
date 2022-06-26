import { ChangeEvent, FC } from 'react';

import classNames from 'classnames';
import styles from './input.module.scss';

interface InputProps {
  type?: string;
  className?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const Input: FC<InputProps> = ({
  type = 'text',
  className = '',
  value,
  onChange,
  placeholder,
}) => (
  <input
    className={classNames(styles.input, { [className]: className })}
    {...{ onChange, type, placeholder, value }}
  />
);
