export namespace Confirmation {
  interface Confirmation {
    fields: Fields;
  }

  interface Fields {
    phone_number: Field<string>;
    dietary_restrictions: {
      vegetarian: boolean;
      vegan: boolean;
      halal: boolean;
      kosher: boolean;
      nut_allergy: boolean;
    };
    shirt_size: DropdownField<shirtSizes>;
    needs_hardware: Field<boolean>;
    hardware_needed: Field<string>;
    major: Field<string>;
    github: Field<string>;
    twitter: Field<string>;
    liability_signature: Field<string>;
    photo_signature: Field<string>;
    coc_signature: Field<string>;
    additional_notes: Field<string>;
  }

  type Field<T> = {
    value: T;
  };

  type DropdownField<T> = {
    value: T;
    options: dropdownOptions;
  };

  type SearchField<T> = {
    value: T;
    results: Object | any[];
    filteredResults: Object | any[];
  };

  type fieldTypes =
    | 'phone_number'
    | 'dietary_restrictions'
    | 'shirt_size'
    | 'needs_hardware'
    | 'hardware_needed'
    | 'major'
    | 'github'
    | 'twitter'
    | 'liability_signature'
    | 'photo_signature'
    | 'coc_signature'
    | 'additional_notes';

  type dietaryRestrictions = 'vegetarian' | 'vegan' | 'halal' | 'kosher' | 'nut_allergy';

  type shirtSizes =
    | ''
    | 'Unisex X-Small'
    | 'Unisex Small'
    | 'Unisex Medium'
    | 'Unisex Large'
    | 'Unisex X-Large'
    | 'Unisex XX-Large'
    | "Women's X-Small"
    | "Women's Small"
    | "Women's Medium"
    | "Women's Large"
    | "Women's X-Large"
    | "Women's XX-Large";

  type dropdownOptions = {
    key: any;
    text: string;
    value: string;
  }[];

  type searchOptions = {
    title: string;
    description: string;
  };
}
