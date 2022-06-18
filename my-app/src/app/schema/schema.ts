import * as yup from "yup";

export const userLoginYupSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email posiada nie własciwą konstrukcję - @gmail.com")
    .required("To pole jest wymagane"),
  password: yup
    .string()
    .min(8, "Hasło musi się składać z minimum 8 znaków")
    .required("To pole jest wymagane"),
});

export const registerSchema = yup.object().shape({
  name: yup.string().required("To pole jest wymagane"),
  surname: yup.string().required("To pole jest wymagane"),
  email: yup
    .string()
    .email("Email posiada nie własciwą konstrukcję - @gmail.com")
    .required("To pole jest wymagane"),
  password: yup
    .string()
    .min(8, "Hasło musi się składać z minimum 8 znaków")
    .required("To pole jest wymagane"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Hasła muszą być takie same"),
});

export const contactSchema = yup.object().shape({
  name: yup.string().required("To pole jest wymagane"),
  email: yup.string().email().required("To pole jest wymagane"),
  phone: yup.string().min(9).max(9).required("To pole jest wymagane"),
  goues: yup.number().required("To pole jest wymagane"),
  date: yup.string().required("To pole jest wymagane"),
  time: yup.string().required("To pole jest wymagane"),
  message: yup.string().min(10).required("To pole jest wymagane"),
});

export const changePasswordSchema = yup.object().shape({
  lastPassword: yup.string().min(4).max(126).required("To pole jest wymagane"),
  newPassword: yup.string().min(4).max(126).required("To pole jest wymagane"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Hasła muszą być takie same"),
});
