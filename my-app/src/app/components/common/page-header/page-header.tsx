import { FC } from 'react';

import styles from './page-header.module.scss';

interface PageHeaderProps {
  title: string;
}

export const PageHeader: FC<PageHeaderProps> = ({ title }) => {
  return <h3 className={styles.pageTitle}>{title}</h3>;
};
