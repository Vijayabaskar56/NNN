
// export const usersTable = sqliteTable("users_table", {
//   id: int().primaryKey({ autoIncrement: true }),
//   name: text().notNull(),
//   age: int().notNull(),
//   email: text().notNull().unique(),
// });

import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";



export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  phone: varchar('phone', { length: 256 }),
});
