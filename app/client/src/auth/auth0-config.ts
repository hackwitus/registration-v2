export const AUTH_CONFIG = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN || '',
  audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo` || '',
  clientID: process.env.REACT_APP_AUTH0_CLIENT || '',
  redirectUri: process.env.REACT_APP_AUTH0_REDIRECT || '',
  responseType: 'id_token',
  scope: 'openid profile email',
};
