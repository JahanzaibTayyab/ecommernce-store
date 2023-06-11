import {
  pgTable,
  uuid,
  text,
  varchar,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";

export const users = pgTable(
  "users",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    password: varchar("password").notNull(),
    role: text("role")
      .$type<"admin" | "customer">()
      .notNull()
      .default("customer"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (users) => {
    return {
      emailIndex: uniqueIndex("email_idx").on(users.email),
    };
  }
);

export type User = InferModel<typeof users>; // return type when queried
export type NewUser = InferModel<typeof users, "insert">; // insert type
