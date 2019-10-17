import { takeLatest, call, put } from 'redux-saga/effects';
import { HANDLE_AUTHENTICATION_CALLBACK, USER_PROFILE_LOADED } from '../actions/userActions';
import { handleAuthentication } from '../auth/auth0-spa';

export function* parseHash() {
  const user = yield call(handleAuthentication);
  yield put({ type: USER_PROFILE_LOADED, user });
}

export function* handleAuthenticationCallback() {
  yield takeLatest(HANDLE_AUTHENTICATION_CALLBACK, parseHash);
}
