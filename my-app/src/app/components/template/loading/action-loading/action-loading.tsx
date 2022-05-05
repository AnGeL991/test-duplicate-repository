import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { RootState } from 'app/store/store';
import { setStatus, setMessage, toggleModal } from 'app/store/panel/reducer';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import styles from './action-loading.module.scss';

export const ActionLoading: FC = () => {
  const { status, loading, massage, open } = useSelector(
    (state: RootState) => state.panel
  );
  const dispatch = useDispatch();

  // const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCloseModal = () => {
    dispatch(toggleModal(!open));
  };

  return (
    <div
      className={classNames(styles.actionLoadingContainer, {
        [styles.loading]: open,
      })}
    >
      <Backdrop sx={{ zIndex: 2000 }} open={open} onClick={handleCloseModal}>
        <Box sx={{ m: 1, position: 'relative' }} className={styles.loadingBox}>
          <div className={styles.cancelBox} onClick={handleCloseModal}>
            <CloseIcon className={styles.closeIcon} />
          </div>
          <div className={styles.wrapper}>
            <Fab
              aria-label="save"
              className={classNames(styles.fab, [styles[status]])}
            >
              {status === 'success' ? <CheckIcon /> : <ErrorOutlineIcon />}
            </Fab>

            {loading && (
              <CircularProgress
                className={classNames(styles.circularProgress, [
                  styles[status],
                ])}
                size={66}
              />
            )}
          </div>
          {massage && (
            <p className={classNames(styles.message, [styles[status]])}>
              {massage}
            </p>
          )}
        </Box>
      </Backdrop>
    </div>
  );
};
