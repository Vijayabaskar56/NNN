
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://postgres.upbdhadzkoshupqntycs:ns^l&ENffG8kcZ@aws-0-ap-south-1.pooler.supabase.com:6543/postgres",
  },
});
