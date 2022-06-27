import { FC } from "react";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import styles from "./account-user.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "app/store/store";

export const AccountUser: FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <Stack direction="row" spacing={4} className={styles.stack}>
      <Avatar className={styles.avatar} />
      <div className={styles.userData}>
        <h3 className={styles.name}>
          {user.name} {user.surname}
        </h3>
      </div>
    </Stack>
  );
};
