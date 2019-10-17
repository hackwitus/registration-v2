// eslint-disable-next-line
import { all } from 'redux-saga/effects';
import { handleAuthenticationCallback } from './userSaga';

export function* rootSaga() {
  yield all([handleAuthenticationCallback()]);
}
