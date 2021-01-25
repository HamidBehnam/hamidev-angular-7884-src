import { domain, clientId, audience, apiUri } from '../../auth_config.json';

export const environment = {
  production: true,
  auth: {
    domain,
    clientId,
    audience,
    redirectUri: window.location.origin + window.location.pathname,
  },
  httpInterceptor: {
    allowedList: [`${apiUri}/*`],
  },
};
