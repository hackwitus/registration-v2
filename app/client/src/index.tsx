import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './store';
import App from './pages/App';
import './assets/sass/main.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
