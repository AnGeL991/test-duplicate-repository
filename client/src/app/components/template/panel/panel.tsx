import { FC } from 'react';
import './panel.scss';

export const Panel: FC = ({ children }) => {
  return <div className="panel">{children}</div>;
};
