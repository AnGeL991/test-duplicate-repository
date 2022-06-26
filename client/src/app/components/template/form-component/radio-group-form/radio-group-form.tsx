import { FC } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import styles from "./radio-group-form.module.scss";

interface RadioButtonProps {
  label: string;
  value: string;
}

interface RadioGroupFormProps {
  label: string;
  name: string;
  values?: RadioButtonProps[] | [];
  defaultValue?: string;
  row?: boolean;
  disabled?: boolean;
  register: any;
}

export const RadioGroupForm: FC<RadioGroupFormProps> = ({
  label,
  defaultValue,
  name,
  values = [],
  row,
  disabled,
  register,
}) => {
  return (
    <FormControl disabled={disabled}>
      <FormLabel className={styles.label} id="demo-radio-buttons-group-label">
        {label}
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={defaultValue}
        name={name}
        className={styles.radioGroup}
        row={row}
      >
        {values.map(({ value, label }, index) => (
          <FormControlLabel
            key={index}
            value={value}
            control={<Radio />}
            label={label}
            {...register("gender")}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
