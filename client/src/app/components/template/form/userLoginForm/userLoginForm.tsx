import { yupResolver } from '@hookform/resolvers/yup';
import { Button, ButtonTypes } from 'app/components/common/button/button';
import { userLoginYupSchema } from 'app/schema/schema';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Field } from '../../field/field';
import { userLoginSchema } from './db';
import styles from './userLoginForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store/store';
import { Navigate } from 'react-router-dom';
import {
  loginRequest,
  loginSuccess,
  setToken,
  userLoaded,
  logOut,
} from 'app/store/auth/reducer';
import { client } from 'app/api';

export const UserLoginForm: FC = () => {
  const {
    token,
    user: { _id },
  } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    control,
    reset,
    watch,
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
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

  if (_id) return <Navigate to={`/account/user`} />;

  // const displayForm = userLoginSchema.map((el, index) => (
  //   <Field key={index} {...{ ...el, register }} />
  // ));

  return (
    <div className={styles.userLoginForm}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {/* {displayForm} */}
        <Button className={styles.btn} type={ButtonTypes.submit}>
          Sign in
        </Button>
      </form>
    </div>
  );
};
