import { FC, useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { MainLayout } from "app/components/layout";
import { setUnReadCount } from "app/store/notifications/reducer";
import {
  countTotalPayment,
  setOrdersCount,
  setOrdersFromLocalStorage,
  setPlacedOrderFromLocalStorage,
} from "app/store/order/reducer";
import { setUser } from "app/store/auth/reducer";
import { setInventoryData } from "app/store/inventory/reducer";

import { Routers } from "routers";
import "./assets/styles/global.scss";
import "app/theme/theme.scss";
import { client } from "app/api";
const App: FC = () => {
  const dispatch = useDispatch();

  const fetchInventoryData = async () => {
    try {
      const { result } = await client("meal");
      console.log(result);
      if (result) dispatch(setInventoryData(result));
    } catch (err: any) {}
  };

  useLayoutEffect(() => {
    dispatch(setUnReadCount());
    dispatch(setOrdersCount());
    dispatch(countTotalPayment());
    dispatch(setUser());
    dispatch(setOrdersFromLocalStorage());
    dispatch(setPlacedOrderFromLocalStorage());
    fetchInventoryData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {}, [dispatch]);

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
