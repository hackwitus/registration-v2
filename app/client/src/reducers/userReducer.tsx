import { USER_PROFILE_LOADED } from '../actions/userActions';
import { User } from '../models/User/user';

const initialState: User.User | {} = {};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_PROFILE_LOADED:
      return action.user;
    default:
      return state;
  }
}
