import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { Button } from "app/components/common";
import { AccountPanel } from "app/components/template";
import { PersonalDataProps } from "./interface";
import { PersonalFormData } from "./form-data";
import { GenerateForm } from "./generate-form";
import styles from "./personal-data.module.scss";
import { RootState } from "app/store/store";
import { useSelector, useDispatch } from "react-redux";
import {
  closeLoading,
  setLoading,
  setMessage,
  setStatus,
  toggleModal,
} from "app/store/panel/reducer";
import { userLoaded, loginSuccess } from "app/store/auth/reducer";
import { client } from "app/api";

export const PersonalData: FC<PersonalDataProps> = ({ id, hidden }) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  const { user, token } = useSelector((state: RootState) => state.auth);

  const handleChangeEditMode = () => {
    setEditMode((prev) => !prev);
  };

  const dispatch = useDispatch();

  const onSubmit = async (data: any) => {
    dispatch(setLoading());
    try {
      const { result } = await client("users/update", token, data);
      if (result) {
        dispatch(userLoaded(result));
        dispatch(loginSuccess());

        dispatch(closeLoading());
      }
    } catch (err: any) {
      dispatch(closeLoading());
      dispatch(toggleModal(true));
      dispatch(setStatus("error"));
      dispatch(setMessage(err.message));
    }
    setEditMode(false);
  };

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
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
