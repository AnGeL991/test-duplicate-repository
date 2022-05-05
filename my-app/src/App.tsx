import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './app/components/pages/home/home';
import { PrivateRoute } from './app/auth/private-route';
import { Account } from './app/components/pages/account/account/account';
import { Login } from './app/components/pages/login/login';
import { MainLayout } from 'app/components/layout';
import { Menu, OrderPage, PaymentPage, CallWaiter } from 'app/components/pages';
import { Loading } from 'app/components/template';
import './assets/styles/global.scss';

const App: FC = () => {
  return (
    <div className="App">
      <MainLayout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/review" element={<OrderPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/waiter" element={<CallWaiter />} />
            <Route key="home" path="/account/user" element={<Account />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </div>
  );
};

export default App;
