import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";


export const users = sqliteTable('users', {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text(),
  email: text(),
  emailVerified: integer({ mode: 'boolean' }), // Using integer for boolean
  image: text(),
  createdAt: text().default('CURRENT_TIMESTAMP'),
  updatedAt: text().default('CURRENT_TIMESTAMP'),
});


export const session = sqliteTable('session', {
  id: integer().primaryKey({ autoIncrement: true }),
  userId: integer().references(() => users.id),
  expiresAt: text(),
  ipAddress: text(),
  userAgent: text(),
});


export const account = sqliteTable('account', {
  id: integer().primaryKey({ autoIncrement: true }),
  userId: integer().references(() => users.id),
  accountId: text(),
  providerId: text(),
  accessToken: text(),
  refreshToken: text(),
  expiresAt: text(),
  password: text(),
});


export const verification = sqliteTable('verification', {
  id: integer().primaryKey({ autoIncrement: true }),
  identifier: text(),
  value: text(),
  expiresAt: text(),
});
