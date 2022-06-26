import { FC, useEffect, useState } from "react";
import { AccountPanel, Field } from "app/components/template";
import { Button } from "app/components/common";

import { changePasswordFields } from "./form-data";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordSchema } from "app/schema/schema";

import styles from "./change-password.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/store/store";
import {
  toggleModal,
  setMessage,
  setStatus,
  setLoading,
} from "app/store/panel/reducer";

interface ChangePasswordProps {
  id: string;
  hidden: boolean;
}

export const ChangePassword: FC<ChangePasswordProps> = ({ id, hidden }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(changePasswordSchema) });
  const [send, setSend] = useState(false);
  const { loading } = useSelector((state: RootState) => state.panel);

  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    dispatch(setLoading());
    setSend(true);
  };

  useEffect(() => {
    if (!loading && send) {
      dispatch(setStatus("success"));
      dispatch(
        setMessage(
          "Zmiana hasła została zakończona powodzeniem"
        )
      );
      dispatch(toggleModal(true));
      reset();
      setSend(false);
    }
  }, [dispatch, loading, reset, send]);

  return (
    <AccountPanel {...{ id, hidden }}>
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          {changePasswordFields.map((field) => (
            <Field
              {...field}
              className={styles.field}
              register={register}
              error={errors[field.name]}
            />
          ))}
        </fieldset>
      </form>
      <div className={styles.buttons}>
        <Button className={styles.btn} onClick={handleSubmit(onSubmit)}>
          Change Password
        </Button>
      </div>
    </AccountPanel>
  );
};
