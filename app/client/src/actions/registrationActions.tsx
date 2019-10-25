import { InputOnChangeData, DropdownProps, TextAreaProps, CheckboxProps } from 'semantic-ui-react';

export const REGISTRATION_HANDLE_CHANGE = 'REGISTRATION_HANDLE_CHANGE';

export const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
  return {
    type: REGISTRATION_HANDLE_CHANGE,
    payload: { data },
  };
};

export const handleDropdownChange = (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
  return {
    type: REGISTRATION_HANDLE_CHANGE,
    payload: { data },
  };
};

export const handleTextAreaChange = (event: React.FormEvent<HTMLTextAreaElement>, data: TextAreaProps) => {
  return {
    type: REGISTRATION_HANDLE_CHANGE,
    payload: { data },
  };
};

export const handleCheckboxChange = (event: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => {
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
