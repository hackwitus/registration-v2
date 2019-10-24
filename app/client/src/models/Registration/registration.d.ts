export namespace Registration {
  interface Registration {
    fields: Fields;
  }

  interface Fields {
    email: Field<string>;
    first_name: Field<string>;
    last_name: Field<string>;
    school: SearchField<string>;
    graduation_year: DropdownField<gradYears>;
    gender: DropdownField<string>;
    description: Field<string>;
    learning_goals: Field<string>;
    is_adult: Field<boolean>;
  }

  type Field<T> = {
    value: T;
  };

  type DropdownField<T> = {
    value: T;
    options: dropdownOptions;
  };

  type SearchField<T> = {
    result: T;
    results: Object | any[];
    filteredResults: Object | any[];
  };

  type fieldTypes =
    | 'email'
    | 'first_name'
    | 'last_name'
    | 'school'
    | 'graduation_year'
    | 'gender'
    | 'description'
    | 'learning_goals'
    | 'is_adult';

  type gradYears = '' | '2019' | '2020' | '2021' | '2022' | '2023';

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
