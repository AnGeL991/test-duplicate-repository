import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../../common/button/button';

import './loginForm.scss';

export const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="loginForm">
      <input type="text" placeholder="login" {...register('login')} />
      <input type="password" placeholder="password" {...register('password')} />
      <Button text="log in" />
    </form>
  );
};
