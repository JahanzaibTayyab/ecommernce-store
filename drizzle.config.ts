import type { Config } from "drizzle-kit";

export default {
  schema: "./src/lib/db/schema/*",
  out: "./drizzle",
} satisfies Config;
