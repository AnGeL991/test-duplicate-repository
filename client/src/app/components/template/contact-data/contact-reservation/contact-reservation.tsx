import { FC, useEffect, useState } from "react";
import { Field } from "app/components/template";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "app/schema/schema";
import styles from "./contact-reservation.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/store/store";
import {
  toggleModal,
  setMessage,
  setStatus,
  setLoading,
} from "app/store/panel/reducer";

const formData = [
  { type: "text", name: "name", placeholder: "Imie i nazwisko *" },
  { type: "email", name: "email", placeholder: "E-mail *" },
  { type: "text", name: "phone", placeholder: "Telefon *" },
  {
    type: "number",
    name: "goues",
    placeholder: "Ilość gości *",
  },
  { type: "date", name: "date", placeholder: "dd.mm.rr *" },
  { type: "time", name: "time" },
  { type: "textarea", name: "message", placeholder: "Treść wiadomości" },
];

export const ContactReservation: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });
  const [send, setSend] = useState(false);
  const { loading } = useSelector((state: RootState) => state.panel);

  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    dispatch(setLoading());
    setSend(true);
  };

  useEffect(() => {
    if (!loading && send) {
      dispatch(setStatus("success"));
      dispatch(
        setMessage(
          "Dziękujemy za rezerwację. Będziemy się kontaktować w sprawie potwierdzenia."
        )
      );
      dispatch(toggleModal(true));
      reset();
      setSend(false);
    }
  }, [dispatch, loading, reset, send]);

  const displayData = formData.map(({ type, name, placeholder }) => {
    if (type === "textarea") {
      return (
        <div className={styles.textarea}>
          <textarea placeholder="Treść wiadomości" {...register("message")} />
          {errors["message"] && (
            <p className={styles.error}>{errors["message"].message}</p>
          )}
        </div>
      );
    }
    return (
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        register={register}
        className={styles.field}
        error={errors[name]}
      />
    );
  });

  return (
    <div className={styles.contactReservation}>
      <header className={styles.header}>
        <h3 className={styles.title}>Rezerwacje</h3>
        <div>
          <span>tel: </span>
          <span className={styles.yellow}>+48 987 654 321</span>
        </div>
        <div>Zostaw swoje informacje a my skontaktujemy się z tobą</div>
      </header>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={styles.fieldset}>
          {displayData}
          <button className={styles.btn}>Wyślij</button>
        </fieldset>
      </form>
    </div>
  );
};
