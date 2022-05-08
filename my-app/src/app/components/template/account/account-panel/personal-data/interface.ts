export interface PersonalDataProps {
  id: string;
  hidden: boolean;
}

export interface ValuesProps {
  label: string;
  value: string;
}

export interface PersonalDataFormProps {
  type: string;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  label: string;
  id: string;
  values?: ValuesProps[];
}
