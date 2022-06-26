import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FC } from 'react';

import styles from './select.module.scss';
import classNames from 'classnames';

interface SelectProps {
  id: string;
  options: { value: string; displayValue: string }[];
  className?: string;
  onChange?: (e: SelectChangeEvent) => void;
  value?: string;
  defaultValue?: string;
}

export const SelectForm: FC<SelectProps> = ({
  id,
  options,
  value,
  onChange,
  className = '',
  defaultValue,
}) => {
  return (
    <FormControl fullWidth className={styles.formControl}>
      <InputLabel id={id}>{defaultValue}</InputLabel>
      <Select
        id="demo-simple-select"
        value={value}
        label="Option"
        onChange={onChange}
        className={classNames(styles.selectForm, className)}
      >
        {options.map(({ value, displayValue }) => (
          <MenuItem className={styles.menuItem} value={value}>
            {displayValue}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
