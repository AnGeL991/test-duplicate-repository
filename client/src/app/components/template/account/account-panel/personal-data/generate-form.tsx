import { PersonalDataFormProps } from "./interface";
import { Field, RadioGroupForm } from "app/components/template";

export const GenerateForm = (
  fieldData: PersonalDataFormProps[],
  register: any,
  styles: { [key: string]: string },
  edit?: boolean
) => {
  return fieldData.map((field) => {
    switch (field.type) {
      case "text": {
        return (
          <Field
            {...field}
            className={styles.field}
            register={register}
            disabled={!edit}
          />
        );
      }
      case "radio": {
        return <RadioGroupForm {...field} row={true} disabled={!edit} />;
      }
      case "date": {
        return (
          <Field
            {...field}
            className={styles.date}
            register={register}
            disabled={!edit}
          />
        );
      }
      default: {
        return (
          <Field
            {...field}
            className={styles.field}
            register={register}
            disabled={!edit}
          />
        );
      }
    }
  });
};
