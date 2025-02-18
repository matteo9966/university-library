import { neon } from "@neondatabase/serverless";
import { config } from "./config";
import postgres from "postgres";

config.env.ENV === "development"
  ? console.log("ENV: development")
  : console.log("ENV: production");
let sql: ReturnType<typeof neon> | ReturnType<typeof postgres>;
if (config.env.ENV === "development") {
  sql = postgres(process.env.DATABASE_URL);
} else {
  //   console.log('production');
  sql = neon(process.env.DATABASE_URL);
}

export default sql as (
  strings: TemplateStringsArray,
  ...values: any[]
) => Promise<any[]>;
