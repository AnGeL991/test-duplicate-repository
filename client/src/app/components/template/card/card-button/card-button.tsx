import { FC } from 'react';

import { useSelector } from 'react-redux';

import { CardPanel } from 'app/components/template';
import { RootState } from 'app/store/store';

import { Badge, IconButton } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import styles from './card-button.module.scss';

interface CardButtonProps {
  openMenu: boolean;
  handleMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

export const CardButton: FC<CardButtonProps> = ({
  openMenu,
  handleMenuOpen,
}) => {
  const { ordersCount } = useSelector((state: RootState) => state.orders);

  return (
    <IconButton
      size="large"
      aria-label="show amount of products"
      color="inherit"
      id="basket"
      onClick={handleMenuOpen}
      className={styles.cardBtn}
    >
      <Badge badgeContent={ordersCount} color="error">
        <ShoppingBasketIcon className={styles.icon} />
      </Badge>
      {openMenu && <CardPanel />}
    </IconButton>
  );
};
