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

import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Dialog, LoginDialog, RegisterDialog } from 'app/components/template';
import { RootState } from 'app/store/store';
import { logOut } from 'app/store/auth/reducer';
import styles from './topbar.module.scss';

enum AccountAction {
  Register = 'register',
  Login = 'Login',
}

export const TopBar: FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const [openDialog, setOpenDialog] = useState<AccountAction | null>(null);

  const handleOpenDialog = (dialog: AccountAction) => {
    setOpenDialog(dialog);
  };

  const handleCloseDialog = () => {
    setOpenDialog(null);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleOpenForm = (form: AccountAction) => {
    setAnchorEl(null);
    handleMobileMenuClose();
    handleOpenDialog(form);
  };

  const handleMenuClose = (form: AccountAction) => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogOut = () => {
    dispatch(logOut);
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = 'primary-search-account-menu';

  const userLogged = isAuthenticated ? (
    <>
      <MenuItem className={styles.menuItem} onClick={handleLogOut}>
        Profile
      </MenuItem>
      <MenuItem
        className={styles.menuItem}
        onClick={() => handleOpenForm(AccountAction.Register)}
      >
        Log out
      </MenuItem>
    </>
  ) : (
    <>
      <MenuItem
        className={styles.menuItem}
        onClick={() => handleOpenForm(AccountAction.Login)}
      >
        Sign in
      </MenuItem>
      <MenuItem
        className={styles.menuItem}
        onClick={() => handleOpenForm(AccountAction.Register)}
      >
        Sign up
      </MenuItem>
    </>
  );
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className={styles.menu}
    >
      {userLogged}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
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
            <MailIcon />
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
      <MenuItem onClick={handleProfileMenuOpen}>
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
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              className={styles.icon}
            >
              <Badge badgeContent={4} color="error">
                <MailIcon className={styles.icon} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon className={styles.icon} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
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
              aria-controls={mobileMenuId}
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
      {renderMobileMenu}
      {renderMenu}
      {openDialog === AccountAction.Login && (
        <Dialog
          {...{ open: openDialog === AccountAction.Login, handleCloseDialog }}
        >
          <LoginDialog />
        </Dialog>
      )}
      {openDialog === AccountAction.Register && (
        <Dialog
          {...{
            open: openDialog === AccountAction.Register,
            handleCloseDialog,
          }}
        >
          <RegisterDialog
            handleChangeForm={() => handleOpenDialog(AccountAction.Login)}
          />
        </Dialog>
      )}
    </>
  );
};
