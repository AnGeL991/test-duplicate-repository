import { FC, lazy, Suspense } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Route, Routes } from 'react-router';
import { Home } from './app/components/pages/home/home';
import { PrivateRoute } from './app/auth/private-route';
import { Account } from './app/components/pages/account/account/account';
import { Login } from './app/components/pages/login/login';
import { MainLayout } from './app/components/layout/mainLayout';
import { Menu } from 'app/components/pages';
import { Loading } from 'app/components/template';
import './assets/styles/global.scss';

const App: FC = () => {
  return (
    <div className="App">
      <MainLayout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route key="home" path="/" element={<Home />} />
            <Route key="menu" path="/menu" element={<Menu />} />
            <Route key="home" path="/account/user" element={<Account />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </div>
  );
};

export default App;
