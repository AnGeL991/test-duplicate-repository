import { FC, useState, SyntheticEvent } from "react";

import { AccountTabs } from "app/components/template";

const Account: FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return <AccountTabs {...{ value, handleChange }} />;
};

export default Account;
