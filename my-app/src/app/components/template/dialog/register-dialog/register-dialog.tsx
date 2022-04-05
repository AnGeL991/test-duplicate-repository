import { FC } from 'react';
import { Field } from 'app/components/template';

import styles from './register-dialog.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from 'app/schema/schema';
import { useForm } from 'react-hook-form';
import { Button, ButtonTypes } from 'app/components/common';

interface RegisterDialogProps {
  handleChangeForm: () => void;
}

export const userRegisterSchema = [
  { type: 'email', name: 'email', placeholder: 'email', label: 'Email' },

  {
    type: 'text',
    name: 'firstName',
    placeholder: 'First Name',
    label: 'First Name',
  },
  {
    type: 'text',
    name: 'lastName',
    placeholder: 'Last Name',
    label: 'Last Name',
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Password',
    label: 'Set Password',
  },
  {
    type: 'password',
    name: 'confirmPassword',
    placeholder: 'Confirm Password',
    label: 'Confirm Password',
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
  console.log(errors);
  const onSubmit = async (data: any) => {
    console.log(data);
    handleChangeForm();
    reset();
  };

  return (
    <div className={styles.panel}>
      <h3 className={styles.title}>Sign up</h3>
      <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={styles.fieldset}>
          {userRegisterSchema.map((el, index) => (
            <Field key={index} {...el} register={register} />
          ))}
          <Button className={styles.btn} type={ButtonTypes.submit}>
            Sign up
          </Button>
        </fieldset>
      </form>
    </div>
  );
};
