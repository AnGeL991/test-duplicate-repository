import { FC } from 'react';
import { UserLoginForm } from '../../template/form/userLoginForm/userLoginForm';
import { Panel } from '../../template/panel/panel';
import loginBgc from '../../../../assets/images/loginBgc.jpg';
import './login.scss';

export const Login: FC = () => {
  return (
    <div className="login" style={{ backgroundImage: `url(${loginBgc})` }}>
      <div className="login__center">
        <h3 className="login__title">User Login</h3>
        <Panel>
          <UserLoginForm />
        </Panel>
      </div>
    </div>
  );
};
