import { FC, SyntheticEvent } from "react";

import {
  ChangePassword,
  PersonalData,
  Orders,
  AccountUser,
} from "app/components/template";
import { Container } from "app/components/layout";

import { Tabs, Tab } from "@mui/material";

import styles from "./account-tabs.module.scss";

interface AccountTabsProps {
  value: number;
  handleChange: (event: SyntheticEvent, newValue: number) => void;
}

export const AccountTabs: FC<AccountTabsProps> = ({ value, handleChange }) => {
  return (
    <section className={styles.tabs}>
      <AccountUser />
      <Container>
        <Tabs value={value} onChange={handleChange} aria-label="Account tabs">
          <Tab label="Personal Data" />
          <Tab label="Your Orders" />
          <Tab label="Change Password" />
        </Tabs>
      </Container>
      <Container>
        <PersonalData {...{ id: "1", hidden: value !== 0 }} />
        <Orders {...{ id: "2", hidden: value !== 1 }} />
        <ChangePassword {...{ id: "3", hidden: value !== 2 }} />
      </Container>
    </section>
  );
};
