import { FC, useEffect } from 'react';
import { Field } from 'app/components/template';

import styles from './register-dialog.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from 'app/schema/schema';
import { useForm } from 'react-hook-form';
import { Button, ButtonTypes } from 'app/components/common';
import { client } from 'app/api';

interface RegisterDialogProps {
  handleChangeForm: () => void;
}

export const userRegisterSchema = [
  {
    type: 'email',
    name: 'email',
    placeholder: 'Email',
    label: 'Email',
    id: 'RegisterEmail',
  },

  {
    type: 'text',
    name: 'firstName',
    placeholder: 'First Name',
    label: 'First Name',
    id: 'RegisterName',
  },
  {
    type: 'text',
    name: 'lastName',
    placeholder: 'Last Name',
    label: 'Last Name',
    id: 'RegisterLastName',
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Password',
    label: 'Set Password',
    id: 'RegisterPassword',
  },
  {
    type: 'password',
    name: 'passwordConfirmation',
    placeholder: 'Confirm Password',
    label: 'Confirm Password',
    id: 'RegisterConfirm',
  },
];

export const RegisterDialog: FC<RegisterDialogProps> = ({
  handleChangeForm,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: any) => {
    const { result } = await client('users/register', '', data);
    if (result) handleChangeForm();
    reset();
  };

  return (
    <div className={styles.panel}>
      <h3 className={styles.title}>Sign up</h3>
      <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={styles.fieldset}>
          {userRegisterSchema.map((el, index) => (
            <Field
              key={index}
              register={register}
              error={errors[el.name]}
              {...el}
            />
          ))}
          <Button className={styles.btn} type={ButtonTypes.submit}>
            Sign up
          </Button>
        </fieldset>
      </form>
    </div>
  );
};
