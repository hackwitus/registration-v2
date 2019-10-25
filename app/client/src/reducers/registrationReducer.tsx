import { REGISTRATION_HANDLE_CHANGE } from '../actions/registrationActions';
import {
  REGISTRATION_HANDLE_SEARCH_RESULT_SELECT,
  REGISTRATION_RESET_SEARCH_RESULTS,
  REGISTRATION_HANDLE_SEARCH_INPUT_CHANGE,
} from '../actions/schoolSearchActions';
import { Registration } from '../models/Registration/registration';
import { initialState } from '../models/Registration/initialState';

export const registrationReducer = (state: Registration.Registration = initialState, { type, payload }) => {
  switch (type) {
    case REGISTRATION_HANDLE_CHANGE:
      return {
        ...state,
        fields: {
          ...state.fields,
          [payload.data.name]: {
            ...state.fields[payload.data.name],
            value: payload.data.value,
          },
        },
      };
    case REGISTRATION_HANDLE_SEARCH_RESULT_SELECT:
      return {
        ...state,
        fields: {
          ...state.fields,
          [payload.data.name]: {
            ...state.fields[payload.data.name],
            value: payload.data.value,
          },
        },
      };
    case REGISTRATION_RESET_SEARCH_RESULTS:
      return {
        ...state,
        fields: {
          ...state.fields,
          [payload.data.name]: {
            ...state.fields[payload.data.name],
            filteredResults: state.fields[payload.data.name].results,
          },
        },
      };
    case REGISTRATION_HANDLE_SEARCH_INPUT_CHANGE:
      return {
        ...state,
        fields: {
          ...state.fields,
          [payload.data.name]: {
            ...state.fields[payload.data.name],
            value: payload.data.value,
            filteredResults: payload.data.filteredResults,
          },
        },
      };
    default:
      return state;
  }
};
