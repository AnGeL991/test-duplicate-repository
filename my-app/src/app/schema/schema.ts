import * as yup from 'yup';

export const userLoginYupSchema = yup.object().shape({
  login: yup.string(),
  password: yup.string(),
});

export const registerSchema = yup.object().shape({
  firstName: yup.string().required('To pole jest wymagane'),
  lastName: yup.string().required('To pole jest wymagane'),
  email: yup
    .string()
    .email('Email posiada nie własciwą konstrukcję - @gmail.com')
    .required('To pole jest wymagane'),
  password: yup
    .string()
    .min(8, 'Hasło musi się składać z minimum 8 znaków')
    .required('To pole jest wymagane'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Hasła muszą być takie same'),
});
