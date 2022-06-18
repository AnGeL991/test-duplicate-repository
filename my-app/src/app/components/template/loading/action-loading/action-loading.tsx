import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { RootState } from "app/store/store";
import { closeLoading } from "app/store/panel/reducer";

import styles from "./action-loading.module.scss";

export const ActionLoading: FC = () => {
  const { loading } = useSelector((state: RootState) => state.panel);

  const dispatch = useDispatch();

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (loading) {
      timeout = setTimeout(() => {
        dispatch(closeLoading());
      }, 2500);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [dispatch, loading]);

  return (
    <div className={classNames(styles.loading, { [styles.active]: loading })}>
      <div>
        <div className={styles.red} />
        <div className={styles.black} />
      </div>
    </div>
  );
};
