// WIP - DO NOT USE
export namespace User {
  type dietaryRestrictions =
    | 'vegetarian'
    | 'vegan'
    | 'halal'
    | 'kosher'
    | 'nut_allergy';

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

  interface Profile {
    is_adult: boolean;
    first_name: string;
    last_name: string;
    school: string;
    gender: string;
    graduation_year: string;
    description: string;
    learning_goals: string;
  }

  interface Confirmation {
    dietary_restrictions: dietaryRestrictions[];
    phone_number: string;
    shirt_size: shirtSizes;
    major: string;
    github: string;
    twitter: string;
    liability_signature: string;
    photo_signature: string;
    coc_signature: string;
  }

  interface Status {
    completed_registration: boolean;
    admitted: boolean;
    confirmed: boolean;
    declined: boolean;
    checked_in: boolean;
    admitted_by: string;
    confirm_by: number;
  }

  interface User {
    profile: Profile;
    confirmation: Confirmation;
    status: Status;
    admin: boolean;
    time_registered: number;
    last_updated: number;
    email_verified: boolean;
    salt: number;
    email: string;
    password: string;
  }
}

interface Profile {
  nickname: string;
  name: string;
  picture: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
  iss: string;
  sub: string;
  aud: string;
  iat: Date;
  exp: Date;
  nonce: string;
}
interface User {
  authenticated: boolean;
  idToken: string;
  profile: Profile;
  expiresAt: Date;
}
