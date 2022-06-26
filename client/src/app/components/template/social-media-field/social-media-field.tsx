import { FC } from 'react';
import { IconType } from 'react-icons';

import styles from './social-media-field.module.scss';

interface SocialMediaFieldProps {
  Icon: IconType;
  text: string;
  onClick?: () => void;
}

export const SocialMediaField: FC<SocialMediaFieldProps> = ({
  Icon,
  text,
  onClick,
}) => {
  return (
    <button className={styles.socialMedia} onClick={onClick}>
      <span>
        <Icon className={styles.icon} />
      </span>
      <span>{text}</span>
    </button>
  );
};
