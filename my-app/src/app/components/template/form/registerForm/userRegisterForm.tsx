import { FC } from 'react';
import { Button, ButtonTypes } from 'app/components/common/button/button';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Field } from '../../field/field';
import { userRegisterSchema } from './db';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from 'app/schema/schema';
import { client } from 'app/api';
import styles from './userRegisterForm.module.scss';

export const UserRegisterForm: FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const displayForm = userRegisterSchema.map((el, index) => (
    <Field key={index} {...{ ...el, register }} />
  ));

  const onSubmit = async (data: any) => {
    const { result } = await client('users/register', '', data);
    if (result) navigate('/account/login', { replace: true });
    reset();
  };

  return (
    <div className={styles.userRegisterForm}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {displayForm}
        <Button className={styles.btn} type={ButtonTypes.submit}>
          Sign up
        </Button>
      </form>
    </div>
  );
};
