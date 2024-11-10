import { createAuthClient } from 'better-auth/react';

const authClient = createAuthClient({
  baseURL: 'http://localhost:8081', /* base url of your Better Auth backend. */
});
