import classNames from 'classnames';
import { FC } from 'react';
import styles from './container.module.scss';

interface ContainerType {
  className?: string;
}

export const Container: FC<ContainerType> = ({ children, className = '' }) => {
  return (
    <div className={classNames(styles.container, { [className]: className })}>
      {children}
    </div>
  );
};
