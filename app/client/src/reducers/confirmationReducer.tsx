import { CONFIRMATION_HANDLE_CHANGE, CONFIRMATION_FOOD_RESTRICTION_CHANGE } from '../actions/confirmationActions';
import { initialState } from '../models/Confirmation/initialState';
import { Confirmation } from '../models/Confirmation/confirmation';

export const confirmationReducer = (state: Confirmation.Confirmation = initialState, { type, payload }) => {
  switch (type) {
    case CONFIRMATION_HANDLE_CHANGE:
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
    case CONFIRMATION_FOOD_RESTRICTION_CHANGE:
      return {
        ...state,
        fields: {
          ...state.fields,
          dietary_restrictions: {
            ...state.fields.dietary_restrictions,
            [payload.data.name]: payload.data.value,
          },
        },
      };
    default:
      return state;
  }
};
