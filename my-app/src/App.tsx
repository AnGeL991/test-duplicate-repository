import { FC, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './app/components/pages/home/home';
import { PrivateRoute } from './app/auth/private-route';
import { Account } from './app/components/pages/account/account/account';
import { Login } from './app/components/pages/login/login';
import { MainLayout } from './app/components/layout/mainLayout';
import { Menu } from 'app/components/pages';
import './assets/styles/global.scss';

const App: FC = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout>
          <Routes>
            <Route key="home" path="/" element={<Home />} />
            <Route key="menu" path="/menu" element={<Menu />} />
            <Route key="home" path="/account/user" element={<Account />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </div>
  );
};

export default App;
