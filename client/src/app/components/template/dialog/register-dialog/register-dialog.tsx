import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Dialog, Field } from 'app/components/template';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from 'app/schema/schema';
import { useForm } from 'react-hook-form';
import { Button, ButtonTypes } from 'app/components/common';
import { client } from 'app/api';
import { RootState } from 'app/store/store';
import { closeDialog, openLoginDialog } from 'app/store/dialog/reducer';

import styles from './register-dialog.module.scss';

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

export const RegisterDialog: FC = () => {
  const {
    auth,
    dialog: { registerDialog },
  } = useSelector((state: RootState) => state);

  const dispatch = useDispatch();

  const handleCloseDialog = () => {
    dispatch(closeDialog());
  };

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
    if (result) dispatch(openLoginDialog());
    reset();
  };

  return (
    <Dialog
      {...{
        open: registerDialog,
        handleCloseDialog,
      }}
    >
      {registerDialog && (
        <div className={styles.panel}>
          <h3 className={styles.title}>Sign up</h3>
          <form
            className={styles.registerForm}
            onSubmit={handleSubmit(onSubmit)}
          >
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
      )}
    </Dialog>
  );
};
