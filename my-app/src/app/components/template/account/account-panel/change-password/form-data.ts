import { changePasswordFormProps } from "./interface";

export const changePasswordFields: changePasswordFormProps[] = [
  {
    type: "password",
    name: "lastPassword",
    placeholder: "Last Password",
    label: "Last Password",
    id: "lastPassword",
  },
  {
    type: "password",
    name: "newPassword",
    placeholder: "New password",
    label: "New Password",
    id: "newPassword",
  },
  {
    type: "password",
    name: "confirmPassword",
    placeholder: "Confirm Password",
    label: "Confirm Password",
    id: "confirmPassword",
  },
];
