import { createStore, applyMiddleware, compose, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from '@redux-saga/core';
import { createBrowserHistory } from 'history';
import { rootReducer } from '../reducers';
import { rootSaga } from '../sagas';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  let middleware = applyMiddleware(routerMiddleware(history), thunk, sagaMiddleware);

  // eslint-disable-next-line
  if (process.env.NODE_ENV === 'development') {
    middleware = composeWithDevTools({ trace: true, traceLimit: 25 })(middleware);
  } else {
    middleware = compose(middleware);
  }
  const store = createStore(rootReducer(history), middleware) as Store<any>;

  sagaMiddleware.run(rootSaga);
  return store;
};
