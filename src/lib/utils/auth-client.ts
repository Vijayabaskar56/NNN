import { createAuthClient } from 'better-auth/react';

const authClient = createAuthClient({
  basURL: 'http://localhost:8081', /* base url of your Better Auth backend. */
});
