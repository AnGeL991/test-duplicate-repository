import { FC } from 'react';
import { Dialog, Field, SocialMediaField } from 'app/components/template';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import {
  AiOutlineGoogle,
  AiFillFacebook,
  AiFillLinkedin,
} from 'react-icons/ai';
import { Button, ButtonTypes } from 'app/components/common';
import { userLoginYupSchema } from 'app/schema/schema';
import { RootState } from 'app/store/store';
import {
  loginRequest,
  loginSuccess,
  setToken,
  userLoaded,
} from 'app/store/auth/reducer';
import { closeDialog } from 'app/store/dialog/reducer';
import { client } from 'app/api';

import styles from './login-dialog.module.scss';

export const userLoginSchema = [
  {
    type: 'text',
    name: 'login',
    placeholder: 'login',
    label: 'Login',
    id: 'login',
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'password',
    label: 'Password',
    id: 'loginPassword',
  },
];

export const LoginDialog: FC = () => {
  const {
    auth,
    dialog: { loginDialog },
  } = useSelector((state: RootState) => state);

  const dispatch = useDispatch();

  const handleCloseDialog = () => {
    dispatch(closeDialog());
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    control,
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(userLoginYupSchema),
  });

  const onSubmit = async (data: any) => {
    dispatch(loginRequest());
    const { token } = await client('users/login', '', {
      email: data.login,
      password: data.password,
    });
    if (token) {
      dispatch(setToken(token));
      dispatch(loginSuccess());
      const { result } = await client('users/validate-Token', token);
      if (result) {
        dispatch(userLoaded(result));
      }
    }
    reset();
  };

  return (
    <Dialog {...{ open: loginDialog, handleCloseDialog }}>
      <div className={styles.panel}>
        <h3 className={styles.title}>Sign in</h3>
        <div className={styles.media}>
          <SocialMediaField Icon={AiOutlineGoogle} text="Login with Facebook" />
          <SocialMediaField Icon={AiFillFacebook} text="Login with Google" />
          <SocialMediaField Icon={AiFillLinkedin} text="Login with Linkedin" />
        </div>
        <div className={styles.border}>
          <span className={styles.separator}>Or</span>
        </div>
        <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
          <fieldset className={styles.fieldset}>
            {userLoginSchema.map((el, index) => (
              <Field key={index} {...el} register={register} />
            ))}
            <Button className={styles.btn} type={ButtonTypes.submit}>
              Sign in
            </Button>
          </fieldset>
        </form>
      </div>
    </Dialog>
  );
};
