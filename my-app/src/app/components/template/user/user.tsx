import { FC, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import classNames from 'classnames';
import styles from './user.module.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'app/store/auth/reducer';
import { RootState } from 'app/store/store';
import { Dialog, LoginDialog, RegisterDialog } from 'app/components/template';

enum AccountAction {
  Register = 'register',
  Login = 'Login',
}

export const User: FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState<AccountAction | null>(null);

  const handleOpenDialog = (dialog: AccountAction) => {
    setOpenDialog(dialog);
  };

  const handleCloseDialog = () => {
    setOpenDialog(null);
  };

  return (
    <>
      <div className={styles.account} onClick={() => setOpen((prev) => !prev)}>
        <FaUser className={styles.icon} />
        <div className={classNames(styles.dropDown, { [styles.active]: open })}>
          <ul className={styles.list}>
            {!isAuthenticated && (
              <li
                className={styles.item}
                onClick={() => handleOpenDialog(AccountAction.Login)}
              >
                <span>Sign in</span>
              </li>
            )}
            <li
              className={styles.item}
              onClick={() => handleOpenDialog(AccountAction.Register)}
            >
              <span>Sign up</span>
            </li>
            {isAuthenticated && (
              <li className={styles.item}>
                <NavLink to="/" onClick={dispatch(logOut)}>
                  Log out
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
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
