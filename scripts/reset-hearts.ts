import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "../db/schema";
import { eq } from "drizzle-orm";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Resetting hearts...");
    await db.update(schema.userProgress).set({ hearts: 5 });
    console.log("Hearts reset successfully");
  } catch (error) {
    console.error(error);
  }
};

main();
