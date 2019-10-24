import * as React from 'react';
import * as _ from 'lodash';
import { SearchResultData, SearchProps } from 'semantic-ui-react';
import { initialState } from '../models/Registration/initialState';
export const REGISTRATION_HANDLE_SEARCH_RESULT_SELECT = 'REGISTRATION_HANDLE_SEARCH_RESULT_SELECT';
export const REGISTRATION_HANDLE_SEARCH_INPUT_CHANGE = 'REGISTRATION_HANDLE_SEARCH_INPUT_CHANGE';
export const REGISTRATION_RESET_SEARCH_RESULTS = 'REGISTRATION_RESET_SEARCH_RESULTS';

export const handleResultSelect = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, data: SearchResultData) => {
  return {
    type: REGISTRATION_HANDLE_SEARCH_RESULT_SELECT,
    payload: {
      data: {
        name: data.name,
        value: data.result.title,
      },
    },
  };
};

export const handleSearchChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, data: SearchProps) => {
  if (data.value && data.value.length < 1) {
    return {
      type: REGISTRATION_RESET_SEARCH_RESULTS,
      payload: {
        data: {
          name: data.name,
        },
      },
    };
  }

  const re = new RegExp(_.escapeRegExp(data.value), 'i');
  const isMatch = result => re.test(result.title);

  return {
    type: REGISTRATION_HANDLE_SEARCH_INPUT_CHANGE,
    payload: {
      data: {
        name: data.name,
        value: data.value,
        filteredResults: _.filter(initialState.fields.school.results, isMatch),
      },
    },
  };
};
