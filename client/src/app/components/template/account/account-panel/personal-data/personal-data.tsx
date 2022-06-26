import { FC, useState, useLayoutEffect } from "react";
import { useForm } from "react-hook-form";

import { Button } from "app/components/common";
import { AccountPanel } from "app/components/template";
import { PersonalDataProps } from "./interface";
import { PersonalFormData } from "./form-data";
import { GenerateForm } from "./generate-form";
import styles from "./personal-data.module.scss";
import { RootState } from "app/store/store";
import { useSelector } from "react-redux";

export const PersonalData: FC<PersonalDataProps> = ({ id, hidden }) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  const { user } = useSelector((state: RootState) => state.auth);

  const handleChangeEditMode = () => {
    setEditMode((prev) => !prev);
  };

  const onSubmit = (data: any) => {
    setEditMode(false);
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    control,
    reset,
    watch,
  } = useForm();

  useLayoutEffect(() => {
    reset(user);
  }, [reset, user]);

  const buttons = !editMode ? (
    <Button className={styles.btn} onClick={handleChangeEditMode}>
      edit
    </Button>
  ) : (
    <>
      <Button className={styles.btn} onClick={handleChangeEditMode}>
        cancel
      </Button>
      <Button className={styles.btn} onClick={handleSubmit(onSubmit)}>
        save
      </Button>
    </>
  );

  const fields = GenerateForm(PersonalFormData, register, styles, editMode);

  return (
    <AccountPanel {...{ id, hidden }}>
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>{fields}</fieldset>
      </form>
      <div className={styles.buttons}>{buttons}</div>
    </AccountPanel>
  );
};
