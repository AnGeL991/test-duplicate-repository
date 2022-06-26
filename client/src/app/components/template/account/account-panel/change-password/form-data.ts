import { changePasswordFormProps } from "./interface";

export const changePasswordFields: changePasswordFormProps[] = [
  {
    type: "password",
    name: "lastPassword",
    placeholder: "Aktualne hasło",
    label: "Aktualne hasło",
    id: "lastPassword",
  },
  {
    type: "password",
    name: "newPassword",
    placeholder: "Nowe hasło",
    label: "Nowe hasło",
    id: "newPassword",
  },
  {
    type: "password",
    name: "confirmPassword",
    placeholder: "Potwierdz hasło",
    label: "Potwierdz hasło",
    id: "confirmPassword",
  },
];
