import { FC } from "react";
import { AccountPanel, Field } from "app/components/template";
import { Button } from "app/components/common";

import { changePasswordFields } from "./form-data";
import { useForm } from "react-hook-form";

import styles from "./change-password.module.scss";

interface ChangePasswordProps {
  id: string;
  hidden: boolean;
}

export const ChangePassword: FC<ChangePasswordProps> = ({ id, hidden }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    control,
    reset,
    watch,
  } = useForm();

  return (
    <AccountPanel {...{ id, hidden }}>
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          {changePasswordFields.map((field) => (
            <Field {...field} register={register} />
          ))}
        </fieldset>
      </form>
      <div className={styles.buttons}>
        <Button className={styles.btn}>Change Password</Button>
      </div>
    </AccountPanel>
  );
};
