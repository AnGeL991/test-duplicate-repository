import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MainLayout } from "app/components/layout";
import { setUnReadCount } from "app/store/notifications/reducer";
import { countTotalPayment, setOrdersCount } from "app/store/order/reducer";
import { Routers } from "routers";
import "./assets/styles/global.scss";
import "app/theme/theme.scss";
const App: FC = () => {
  const dispatch = useDispatch();

  dispatch(setUnReadCount());
  dispatch(setOrdersCount());
  dispatch(countTotalPayment());

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
