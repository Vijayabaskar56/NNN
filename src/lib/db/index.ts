import { drizzle } from 'drizzle-orm/expo-sqlite';
// import { drizzle as drizzle_two } from 'drizzle-orm/node-postgres';
import * as SQLite from 'expo-sqlite';
const expo = SQLite.openDatabaseSync('db.db');

export const local_db = drizzle(expo);

// export const db = drizzle_two("postgresql://postgres.upbdhadzkoshupqntycs:ns^l&ENffG8kcZ@aws-0-ap-south-1.pooler.supabase.com:6543/postgres");
