import { FC } from 'react';
import { Button, Input } from 'app/components/common';

import styles from './add-value-form.module.scss';

interface AddValueFormatProps {
  text: string;
  btn: string;
  onClick?: () => void;
  onChange?: () => void;
  value?: string;
  placeholder?: string;
}

export const AddValueFormat: FC<AddValueFormatProps> = ({
  text,
  btn,
  onClick,
  onChange,
  value,
  placeholder,
}) => {
  return (
    <div className={styles.addValueFormat}>
      <div className={styles.text}>{text}</div>
      <Input {...{ value, onChange, placeholder }} className={styles.input} />
      <Button {...{ onClick, className: styles.btn }}>{btn}</Button>
    </div>
  );
};
