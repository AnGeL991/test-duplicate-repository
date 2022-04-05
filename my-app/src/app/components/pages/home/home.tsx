import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../../store/store';
import {} from 'react-icons';
import { Panel } from '../../template/panel/panel';
import { useSelector, useDispatch } from 'react-redux';
//import { userLoading, logOut, setToken } from '../../../store/auth/reducer';

export const Home: FC = () => {
  const { loading, token } = useSelector((state: RootState) => state.auth);
  // const dispatch = useDispatch();
  return (
    <div>
      home
      {/* <Panel></Panel> */}
      {/* <button
          aria-label="Increment value"
          onClick={() => dispatch(setToken(token + '1'))}
        >
          Increment
        </button>
        <span>{token}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(logOut())}>
          Decrement
        </button> */}
    </div>
  );
};
