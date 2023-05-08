export const oktaConfig = {
      clientId: '0oa9fdrehwXMUbju95d7',
      issuer: 'https://dev-76586961.okta.com/oauth2/default',
      redirectUri: 'http://localhost:3000/login/callback',
      scopes: ['openid', 'profile', 'email'],
      pkce: true,
      disableHttpsCheck: true,
  }