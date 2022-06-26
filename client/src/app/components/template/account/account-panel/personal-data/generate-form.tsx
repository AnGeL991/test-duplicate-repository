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
            key={field.name}
            {...field}
            className={styles.field}
            register={register}
            disabled={!edit}
          />
        );
      }
      case "radio": {
        return (
          <RadioGroupForm
            key={field.name}
            {...field}
            row={true}
            register={register}
            disabled={!edit}
            defaultValue={"male"}
          />
        );
      }
      case "date": {
        return (
          <Field
            key={field.name}
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
            key={field.name}
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
