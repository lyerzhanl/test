import Keycloak from 'keycloak-js';
const keycloak = new Keycloak({
  url: 'https://91.147.92.254:8443/auth',
  realm: 'socialapp',
  clientId: 'socialapp-web',
});

export default keycloak;
