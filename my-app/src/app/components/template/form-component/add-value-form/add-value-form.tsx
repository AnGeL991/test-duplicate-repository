import { ChangeEvent, FC, useState } from 'react';
import { Button, Input } from 'app/components/common';

import styles from './add-value-form.module.scss';
import { useDispatch } from 'react-redux';

interface AddValueFormatProps {
  text: string;
  btn: string;
  action: any;
  placeholder?: string;
}

export const AddValueFormat: FC<AddValueFormatProps> = ({
  text,
  btn,
  action,
  placeholder,
}) => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    return setValue(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(action(value));
    setValue('');
  };

  return (
    <div className={styles.addValueFormat}>
      <div className={styles.text}>{text}</div>
      <Input
        {...{ value, onChange: handleChangeValue, placeholder }}
        className={styles.input}
      />
      <Button {...{ onClick: handleSubmit, className: styles.btn }}>
        {btn}
      </Button>
    </div>
  );
};
