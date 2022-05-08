import {FC} from "react";
import {useDispatch} from "react-redux";
import {MainLayout} from "app/components/layout";
import {setUnReadCount} from "app/store/notifications/reducer";
import {countTotalPayment, setOrdersCount} from "app/store/order/reducer";
import {Routers} from "routers";

import "./assets/styles/global.scss";

const App: FC = () => {
  const dispatch = useDispatch();

  dispatch(setUnReadCount());
  dispatch(setOrdersCount());
  dispatch(countTotalPayment());

  return (
    <div className="App">
      <MainLayout>
        <Routers />
      </MainLayout>
    </div>
  );
};

export default App;
