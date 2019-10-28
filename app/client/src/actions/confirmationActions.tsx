import { InputOnChangeData, DropdownProps, CheckboxProps } from 'semantic-ui-react';

export const CONFIRMATION_HANDLE_CHANGE = 'CONFIRMATION_HANDLE_CHANGE';
export const CONFIRMATION_FOOD_RESTRICTION_CHANGE = 'CONFIRMATION_FOOD_RESTRICTION_CHANGE';

export const handleInputChange = (_: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
  return {
    type: CONFIRMATION_HANDLE_CHANGE,
    payload: { data },
  };
};

export const handleDropdownChange = (_: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
  return {
    type: CONFIRMATION_HANDLE_CHANGE,
    payload: { data },
  };
};

export const handleCheckboxChange = (_: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => {
  return {
    type: CONFIRMATION_HANDLE_CHANGE,
    payload: {
      data: {
        name: data.name,
        value: data.checked,
      },
    },
  };
};

export const handleFoodRestrictionChange = (_: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => {
  return {
    type: CONFIRMATION_FOOD_RESTRICTION_CHANGE,
    payload: {
      data: {
        name: data.name,
        value: data.checked,
      },
    },
  };
};
