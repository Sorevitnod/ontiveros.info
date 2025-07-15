const { Provider } = require('oidc-provider');

const issuer = 'https://auth.ontiveros.info';

const clients = [
  {
    client_id: 'solid-client',
    client_secret: 'solid-secret',
    redirect_uris: ['https://ontiveros.info/callback'],
    response_types: ['code'],
    grant_types: ['authorization_code'],
    token_endpoint_auth_method: 'client_secret_basic',
  },
];

const configuration = {
  clients,
  features: {
    devInteractions: { enabled: true }, // simple built-in login page
  },
  formats: {
    AccessToken: 'jwt',
  },
};

const oidc = new Provider(issuer, configuration);

oidc.listen(process.env.PORT || 3000, () => {
  console.log(`OIDC server listening on ${issuer}`);
});
