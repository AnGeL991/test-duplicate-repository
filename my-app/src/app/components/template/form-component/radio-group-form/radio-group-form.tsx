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
}

export const RadioGroupForm: FC<RadioGroupFormProps> = ({
  label,
  defaultValue,
  name,
  values = [],
  row,
}) => {
  return (
    <FormControl>
      <FormLabel className={styles.label} id="demo-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={defaultValue}
        name={name}
        className={styles.radioGroup}
        row={row}
      >
        {values.map(({ value, label }) => (
          <FormControlLabel  value={value} control={<Radio />} label={label} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
