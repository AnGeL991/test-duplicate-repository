import { PersonalDataFormProps } from "./interface";

export const PersonalFormData: PersonalDataFormProps[] = [
  {
    type: "text",
    name: "surname",
    placeholder: "Surname",
    label: "Surname",
    id: "surname",
  },
  {
    type: "text",
    name: "name",
    placeholder: "Name",
    label: "Name",
    id: "Name",
  },
  {
    type: "text",
    name: "middleName",
    placeholder: "Middle Name",
    label: "Middle Name",
    id: "middleName",
  },
  {
    type: "date",
    name: "birth",
    placeholder: "25.03.1999",
    label: "Date of birth",
    id: "birth",
  },
  {
    type: "radio",
    name: "gender",
    label: "Gender",
    defaultValue: "famale",
    values: [
      { label: "Male", value: "male" },
      { label: "Famale", value: "Famale" },
    ],
    id: "Gender",
  },
  {
    type: "text",
    name: "phoneNumber",
    placeholder: "+48 000 000 000",
    label: "Phone Number",
    id: "phoneNumber",
  },
  {
    type: "email",
    name: "email",
    placeholder: "example@gmail.com",
    label: "E-mail",
    id: "email",
  },
  {
    type: "text",
    name: "citizenship",
    placeholder: "Citizenship",
    label: "Citizenship",
    id: "citizenship",
  },
  {
    type: "text",
    name: "country",
    placeholder: "Country",
    label: "Country",
    id: "country",
  },
];
