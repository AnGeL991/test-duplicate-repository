import { FC } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { userLoginYupSchema } from "app/schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "app/components/common";
import { Dialog, Field } from "app/components/template";
import { useDispatch, useSelector } from "react-redux";
import {
  closeLoading,
  setLoading,
  setMessage,
  setStatus,
  toggleModal,
} from "app/store/panel/reducer";
import { setToken, userLoaded, loginSuccess } from "app/store/auth/reducer";

import Logo from "assets/images/logo-big.svg";
import styles from "./user-login.module.scss";
import { RootState } from "app/store/store";
import { client } from "app/api";

interface UserLoginProps {
  open: boolean;
  handleClose: () => void;
  handleOpenRegister?: () => void;
}

export const UserLogin: FC<UserLoginProps> = ({
  open,
  handleClose,
  handleOpenRegister,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(userLoginYupSchema),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data: any) => {
    dispatch(setLoading());
    try {
      const { token } = await client("users/login", "", data);

      if (token) {
        dispatch(setToken(token));

        const { result } = await client("users/validate-Token", token);
        if (result) {
          dispatch(userLoaded(result));
          dispatch(loginSuccess());
          navigate("/account");
          dispatch(closeLoading());
        }
      }
    } catch (err: any) {
      dispatch(closeLoading());
      dispatch(toggleModal(true));
      dispatch(setStatus("error"));
      dispatch(setMessage(err.message));
    }
    handleClose();
    reset();
  };

  return (
    <Dialog open={open} handleCloseDialog={handleClose}>
      <div className={styles.loginForm}>
        <img src={Logo} alt="logo" className={styles.img} />
        <form>
          <fieldset className={styles.fieldset}>
            <Field
              label="Login"
              type="email"
              placeholder="E-mail"
              name="email"
              register={register}
              error={errors["email"]}
            />
            <Field
              label="password"
              type="password"
              name="password"
              placeholder="Password"
              register={register}
              error={errors["password"]}
            />
          </fieldset>
        </form>
        <Button className={styles.btn} onClick={handleSubmit(onSubmit)}>
          Log in
        </Button>
        <div className={styles.info}>
          Not a member yet?
          <strong className={styles.join} onClick={handleOpenRegister}>
            Join Now
          </strong>
        </div>
      </div>
    </Dialog>
  );
};
