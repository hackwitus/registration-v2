import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { userReducer } from './userReducer';
import { sidebarReducer } from './sidebarReducer';
import { registrationReducer } from './registrationReducer';

export const rootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history) as any,
    user: userReducer as any,
    sidebar: sidebarReducer as any,
    registration: registrationReducer as any,
  });
