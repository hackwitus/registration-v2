import { TOGGLE_SIDEBAR, BLUR_SIDEBAR } from '../actions/sidebarActions';

const initialState = { visible: false };

export function sidebarReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, visible: !state.visible };
    case BLUR_SIDEBAR:
      return { ...state, visible: false };
    default:
      return state;
  }
}
