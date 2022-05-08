import { FC } from "react";

interface AccountPanelProps {
  id: string;
  hidden: boolean;
}

export const AccountPanel: FC<AccountPanelProps> = ({
  id,
  hidden,
  children,
}) => {
  return (
    <article id={id} hidden={hidden}>
      {children}
    </article>
  );
};
