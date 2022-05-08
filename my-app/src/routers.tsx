import {FC, Suspense, lazy} from "react";

import {Route, Routes} from "react-router";

import {CircularProgress} from "@mui/material";

const Home = lazy(() => import("app/components/pages/home/home"));
const Menu = lazy(() => import("app/components/pages/menu/menu"));
const OrderPage = lazy(() => import("app/components/pages/order/order"));
const PaymentPage = lazy(() => import("app/components/pages/payment/payment"));
const CallWaiter = lazy(() => import("app/components/pages/call-waiter/call-waiter"));
const Account = lazy(() => import("app/components/pages/account/account"));

export const Routers: FC = () => {
  return (
    <Suspense fallback={<CircularProgress color="inherit" />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/review" element={<OrderPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/waiter" element={<CallWaiter />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Suspense>
  );
};
