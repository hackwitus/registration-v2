import uuid from 'uuid/v4';
import schoolData from '../../assets/data/schools.json';
import { Registration } from './registration';

export const fetchSchools = () => {
  let schools: any = [];
  schoolData.schools.map(school => {
    return schools.push({ key: uuid(), title: school });
  });
  return schools;
};

export const graduationYears = [
  { key: uuid(), text: '2019', value: '2019' },
  { key: uuid(), text: '2020', value: '2020' },
  { key: uuid(), text: '2021', value: '2021' },
  { key: uuid(), text: '2022', value: '2022' },
  { key: uuid(), text: '2023', value: '2023' },
];

export const genders = [
  { key: uuid(), text: 'Male', value: 'male' },
  { key: uuid(), text: 'Female', value: 'female' },
  { key: uuid(), text: 'Other', value: 'other' },
  { key: uuid(), text: 'Prefer Not To Specify', value: 'prefer_not_to_specify' },
];

export const initialState: Registration.Registration = {
  fields: {
    email: {
      value: '',
    },
    first_name: {
      value: '',
    },
    last_name: {
      value: '',
    },
    school: {
      results: fetchSchools(),
      filteredResults: fetchSchools(),
      result: '',
    },
    graduation_year: {
      value: '',
      options: graduationYears,
    },
    gender: {
      value: '',
      options: genders,
    },
    description: {
      value: '',
    },
    learning_goals: {
      value: '',
    },
    is_adult: {
      value: false,
    },
  },
};
