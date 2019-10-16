import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from './auth/auth0-spa';

import { AUTH_CONFIG } from './auth/auth0-config';
import { history } from './store';
import { configureStore } from './store';
import './assets/sass/main.scss';
import App from './pages/App';

const store = configureStore();

const onRedirectCallback = appState => {
  history.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
};

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain={AUTH_CONFIG.domain}
      client_id={AUTH_CONFIG.client_id}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <App />
    </Auth0Provider>
  </Provider>,
  document.querySelector('#root')
);
