import { FC } from 'react';

import classNames from 'classnames';
import styles from './input.module.scss';

interface InputProps {
  type?: string;
  className?: string;
  value?: string;
  onClick?: () => void;
  placeholder?: string;
}

export const Input: FC<InputProps> = ({
  type = 'text',
  className = '',
  value,
  onClick,
  placeholder,
}) => (
  <input
    className={classNames(styles.input, { [className]: className })}
    {...{ onClick, type, placeholder, value }}
  />
);
