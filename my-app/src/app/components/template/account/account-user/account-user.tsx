import { FC } from "react";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import styles from "./account-user.module.scss";

export const AccountUser: FC = () => {
  return (
    <Stack direction="row" spacing={4} className={styles.stack}>
      <Avatar className={styles.avatar} />
      <div className={styles.userData}>
        <h3 className={styles.name}>Adrian Markuszewski</h3>
        <span className={styles.role}>Admin</span>
      </div>
    </Stack>
  );
};
