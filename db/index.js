import pg from "pg";
import { db } from "./server.js";

export const pool = new pg.Pool({
  connectionString: db.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
