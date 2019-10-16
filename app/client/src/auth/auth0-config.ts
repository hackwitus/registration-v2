export const AUTH_CONFIG = {
  // eslint-disable-next-line
  domain: process.env.REACT_APP_AUTH0_DOMAIN || '',
  // eslint-disable-next-line
  client_id: process.env.REACT_APP_AUTH0_CLIENT || '',
  callbackUrl: 'http://localhost:3000/auth/callback',
  redirect_url: 'http://localhost:3000/auth/callback',
  audience: 'hackwitus.auth0.com',
};
