import { FC, useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { MainLayout } from "app/components/layout";
import { setUnReadCount } from "app/store/notifications/reducer";
import { countTotalPayment, setOrdersCount } from "app/store/order/reducer";
import { setUser } from "app/store/auth/reducer";

import { Routers } from "routers";
import "./assets/styles/global.scss";
import "app/theme/theme.scss";
const App: FC = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(setUnReadCount());
    dispatch(setOrdersCount());
    dispatch(countTotalPayment());
    dispatch(setUser());
  }, [dispatch]);

  useEffect(() => {
    document.body.setAttribute("data-theme", "dark");
  }, []);

  return (
    <div className="App">
      <MainLayout>
        <Routers />
      </MainLayout>
    </div>
  );
};

export default App;
