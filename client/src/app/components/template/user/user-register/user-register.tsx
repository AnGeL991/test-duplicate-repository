import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "app/components/common";
import { Dialog, Field } from "app/components/template";
import { registerSchema } from "app/schema/schema";
import Logo from "assets/images/logo-big.svg";
import styles from "./user-register.module.scss";
import { useDispatch } from "react-redux";
import {
  toggleModal,
  setMessage,
  setStatus,
  setLoading,
  closeLoading,
} from "app/store/panel/reducer";
import { client } from "app/api";

interface UserRegisterProps {
  open: boolean;
  handleClose: () => void;
}

export const UserRegister: FC<UserRegisterProps> = ({ open, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const dispatch = useDispatch();

  const onSubmit = async (data: any) => {
    dispatch(setLoading());

    try {
      const { result } = await client("users/register", "", data);
      if (result) {
        dispatch(closeLoading());
        handleClose();
        dispatch(toggleModal(true));
        dispatch(setStatus("success"));
        dispatch(setMessage("Konto zostało załozone pomyslnie"));
      }
    } catch (err: any) {
      console.log(err);
      handleClose();
      dispatch(toggleModal(true));
      dispatch(closeLoading());
      dispatch(setStatus("error"));
      dispatch(setMessage(err.message));
    }
    reset();
  };

  return (
    <Dialog open={open} handleCloseDialog={handleClose}>
      <div className={styles.registerDialog}>
        <div className={styles.logo}>
          <img src={Logo} alt="logo" className={styles.img} />
        </div>
        <div className={styles.registerForm}>
          <form>
            <fieldset className={styles.fieldset}>
              <Field
                label="Email"
                type="email"
                name="email"
                placeholder="Email"
                register={register}
                error={errors["email"]}
              />
              <Field
                label="Imię"
                type="text"
                name="name"
                placeholder="Imię"
                register={register}
                className={styles.half}
                error={errors["name"]}
              />
              <Field
                label="Nazwisko"
                type="text"
                name="surname"
                placeholder="Nazwisko"
                register={register}
                className={styles.half}
                error={errors["surname"]}
              />
              <Field
                label="Hasło"
                type="Password"
                name="password"
                placeholder="Hasło"
                register={register}
                error={errors["password"]}
              />
              <Field
                label="Potwierdz hasło"
                type="password"
                name="confirmPassword"
                placeholder="Potwierdz hasło"
                register={register}
                error={errors["confirmPassword"]}
              />
            </fieldset>
          </form>
          <Button className={styles.btn} onClick={handleSubmit(onSubmit)}>
            Stwórz konto
          </Button>
        </div>
      </div>
    </Dialog>
  );
};
