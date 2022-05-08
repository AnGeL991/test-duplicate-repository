import { PersonalDataFormProps } from "./interface";
import { Field, RadioGroupForm } from "app/components/template";

export const GenerateForm = (
  fieldData: PersonalDataFormProps[],
  register: any,
  styles: { [key: string]: string }
) => {
  return fieldData.map((field) => {
    switch (field.type) {
      case "text": {
        return (
          <Field {...field} className={styles.field} register={register} />
        );
      }
      case "radio": {
        return <RadioGroupForm {...field} row={true} />;
      }
      case "date": {
        return <Field {...field} className={styles.date} register={register} />;
      }
      default: {
        return (
          <Field {...field} className={styles.field} register={register} />
        );
      }
    }
  });
};
