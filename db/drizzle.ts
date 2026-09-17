import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

const connectionString =
  process.env.DATABASE_URL ||
  "postgresql://placeholder:placeholder@placeholder.neon.tech/placeholder?sslmode=require";

const sql = neon(connectionString);
const db = drizzle(sql, { schema });

export default db;
