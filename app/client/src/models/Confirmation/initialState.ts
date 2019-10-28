import uuid from 'uuid/v4';
import { Confirmation } from './confirmation';

export const shirt_sizes = [
  { key: uuid(), text: 'Unisex X-Small', value: 'unisex_x_small' },
  { key: uuid(), text: 'Unisex Small', value: 'unisex_small' },
  { key: uuid(), text: 'Unisex Medium', value: 'unisex_medium' },
  { key: uuid(), text: 'Unisex Large', value: 'unisex_large' },
  { key: uuid(), text: 'Unisex X-Large', value: 'unisex_x_large' },
  { key: uuid(), text: 'Unisex XX-Large', value: 'unisex_xx_large' },
  { key: uuid(), text: "Women's X-Small", value: 'womens_x_small' },
  { key: uuid(), text: "Women's Small", value: 'womens_small' },
  { key: uuid(), text: "Women's Medium", value: 'womens_medium' },
  { key: uuid(), text: "Women's Large", value: 'womens_large' },
  { key: uuid(), text: "Women's X-Large", value: 'womens_x_large' },
  { key: uuid(), text: "Women's XX-Large", value: 'womens_xx_large' },
];

export const initialState: Confirmation.Confirmation = {
  fields: {
    phone_number: {
      value: ''
    },
    dietary_restrictions: {
      vegetarian: false,
      vegan: false,
      halal: false,
      kosher: false,
      nut_allergy: false,
    },
    shirt_size: {
      value: '',
      options: shirt_sizes
    },
    needs_hardware: {
      value: false,
    },
    hardware_needed: {
      value: ''
    },
    major: {
      value: ''
    },
    github: {
      value: ''
    },
    twitter: {
      value: ''
    },
    liability_signature: {
      value: ''
    },
    photo_signature: {
      value: ''
    },
    coc_signature: {
      value: ''
    },
    additional_notes: {
      value: ''
    }
  }
}