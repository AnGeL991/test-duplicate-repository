import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import { Loading } from 'app/components/template';
import 'normalize.css';
const App = lazy(() => import('./App'));

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
