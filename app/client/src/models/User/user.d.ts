export namespace User {
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
}
