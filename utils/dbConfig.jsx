import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:npg_CuFgWyXhD42P@ep-small-art-a5k4hdso-pooler.us-east-2.aws.neon.tech/finan-smart?sslmode=require"
);
export const db = drizzle(sql, { schema });
