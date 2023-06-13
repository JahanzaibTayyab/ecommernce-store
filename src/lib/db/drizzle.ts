import { drizzle } from "drizzle-orm/vercel-postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { sql } from "@vercel/postgres";
export const db = drizzle(sql);

async function migration() {
  await migrate(db, { migrationsFolder: "drizzle" });
}
//issue with vercel postgres with edge functions not supported yet
//migration();
