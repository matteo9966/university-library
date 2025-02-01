import sql from "@/lib/db";
import { responseBuilder } from "@/lib/responseBuilder";

async function createUserTable() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users(
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        univerisityidnumber VARCHAR(255) NOT NULL
    )`;
}

export async function GET() {
  try {
    await sql`BEGIN`;
    await createUserTable();
    await sql`COMMIT`;
    return Response.json(
      responseBuilder({
        message: "Table created successfully",
        statusCode: 200,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      responseBuilder({
        error: "Error creating table - " ,
        statusCode: 500,
        message: "Error creating table",
      }),
      { status: 500 }
    );
  }
}
