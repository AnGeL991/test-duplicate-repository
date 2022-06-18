import { FC } from "react";

import { ActionLoading, Notifications, Action } from "app/components/template";
import { AsideBar, TopBar } from "app/components/layout";
import { Box } from "@mui/material";

import styles from "./mainLayout.module.scss";

export const MainLayout: FC = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.mainLayout}>
      <AsideBar />
      <div className={styles.container}>{children}</div>
      <Notifications />
      <TopBar />
      <Action />
      <ActionLoading />
    </Box>
  );
};
