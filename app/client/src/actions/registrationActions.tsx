import { InputOnChangeData, DropdownProps, TextAreaProps, CheckboxProps } from 'semantic-ui-react';

export const REGISTRATION_HANDLE_CHANGE = 'REGISTRATION_HANDLE_CHANGE';

export const handleInputChange = (_: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
  return {
    type: REGISTRATION_HANDLE_CHANGE,
    payload: { data },
  };
};

export const handleDropdownChange = (_: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
  return {
    type: REGISTRATION_HANDLE_CHANGE,
    payload: { data },
  };
};

export const handleTextAreaChange = (_: React.FormEvent<HTMLTextAreaElement>, data: TextAreaProps) => {
  return {
    type: REGISTRATION_HANDLE_CHANGE,
    payload: { data },
  };
};

export const handleCheckboxChange = (_: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => {
  return {
    type: REGISTRATION_HANDLE_CHANGE,
    payload: {
      data: {
        name: data.name,
        value: data.checked,
      },
    },
  };
};

export const initializeFromAuth = (field: string, value: string) => {
  return {
    type: REGISTRATION_HANDLE_CHANGE,
    payload: {
      data: {
        name: field,
        value,
      },
    },
  };
};
