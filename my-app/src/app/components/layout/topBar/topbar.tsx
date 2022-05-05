import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
} from '@mui/material';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {
  LoginDialog,
  RegisterDialog,
  NotificationsButton,
  CardButton,
} from 'app/components/template';
import { RootState } from 'app/store/store';
import { logOut } from 'app/store/auth/reducer';
import { openLoginDialog, openRegisterDialog } from 'app/store/dialog/reducer';
import styles from './topbar.module.scss';

export type MenuOptions = 'profile' | 'notifications' | 'basket' | '';

export const TopBar: FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    if (openMenu === event.currentTarget.id) {
      return setOpenMenu(null);
    }
    setOpenMenu(event.currentTarget.id);
    setAnchorEl(event.currentTarget);
  };

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setOpenMenu(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogOut = () => {
    dispatch(logOut);
    setOpenMenu(null);
  };

  const handleOpenLoginDialog = () => {
    setOpenMenu(null);

    dispatch(openLoginDialog());
  };

  const handleOpenRegisterDialog = () => {
    setOpenMenu(null);
    dispatch(openRegisterDialog());
  };

  const userLogged = isAuthenticated ? (
    <div>
      <MenuItem className={styles.menuItem}>Profile</MenuItem>
      <MenuItem className={styles.menuItem} onClick={handleLogOut}>
        Log out
      </MenuItem>
    </div>
  ) : (
    <div>
      <MenuItem className={styles.menuItem} onClick={handleOpenLoginDialog}>
        Sign in
      </MenuItem>
      <MenuItem className={styles.menuItem} onClick={handleOpenRegisterDialog}>
        Sign up
      </MenuItem>
    </div>
  );

  const profileMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={openMenu === 'profile'}
      onClose={handleMenuClose}
      className={styles.menu}
    >
      {userLogged}
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <ShoppingBasketIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="sticky" className={styles.appBar}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <CardButton
              openMenu={openMenu === 'basket'}
              handleMenuOpen={handleMenuOpen}
            />
            <NotificationsButton
              openMenu={openMenu === 'notifications'}
              handleMenuOpen={handleMenuOpen}
            />
            <IconButton
              size="large"
              edge="end"
              id="profile"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
              className={styles.icon}
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              className={styles.icon}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <LoginDialog />
      <RegisterDialog />
      {renderMobileMenu}
      {profileMenu}
    </>
  );
};
