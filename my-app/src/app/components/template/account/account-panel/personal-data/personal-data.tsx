import { FC, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "app/components/common";
import { AccountPanel, Field, RadioGroupForm } from "app/components/template";
import { PersonalDataProps } from "./interface";
import { PersonalFormData } from "./form-data";
import { GenerateForm } from "./generate-form";
import styles from "./personal-data.module.scss";

export const PersonalData: FC<PersonalDataProps> = ({ id, hidden }) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleChangeEditMode = () => {
    setEditMode((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    control,
    reset,
    watch,
  } = useForm();

  const buttons = editMode ? (
    <Button className={styles.btn} onClick={handleChangeEditMode}>
      edit
    </Button>
  ) : (
    <>
      <Button className={styles.btn} onClick={handleChangeEditMode}>
        cancel
      </Button>
      <Button className={styles.btn} onClick={handleChangeEditMode}>
        save
      </Button>
    </>
  );

  const fields = GenerateForm(PersonalFormData, register, styles);

  return (
    <AccountPanel {...{ id, hidden }}>
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>{fields}</fieldset>
      </form>
      <div className={styles.buttons}>{buttons}</div>
    </AccountPanel>
  );
};
