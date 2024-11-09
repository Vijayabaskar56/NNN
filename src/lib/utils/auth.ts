import { expo } from '@better-auth/expo';
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { local_db } from '@/lib/db';


export const auth = betterAuth({
  plugins: [
    expo()
  ],
  trustedOrigins: ["myapp://"],
  database: drizzleAdapter(local_db, {
    provider: "pg", // or "mysql", "sqlite"
  })
});
