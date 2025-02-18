import sql from "@/lib/db";
import { responseBuilder } from "@/lib/responseBuilder";

async function createUserRolesEnum() {
  await sql`CREATE TYPE user_role AS ENUM ('user', 'admin')`;
}
async function createUserStatusEnum() {
  await sql`CREATE TYPE user_status AS ENUM ('pending','subscribed')`;
}

async function createUUIDExtension() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
}

async function createUserTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS users(
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        univerisity_id_number VARCHAR(255) NOT NULL,
        university_card_image VARCHAR(255) DEFAULT '',
        role user_role DEFAULT 'user'::user_role,
        full_name VARCHAR(255) DEFAULT '',
        status user_status DEFAULT 'pending'::user_status
    )`;
}

async function createAuthorsTable() {
  await sql`CREATE TABLE IF NOT EXISTS authors(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    birthdate DATE,
    nationality VARCHAR(255),
    biography TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`;
}

async function createCategoriesTable() {
  await sql`CREATE TABLE IF NOT EXISTS categories(
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
  )`;
}

async function createBooksTable() {
  await sql`CREATE TABLE IF NOT EXISTS books(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author_id INT NOT NULL,
    genre INT NOT NULL,
    price NUMERIC(10,2) NOT NULL CHECK(price>0),
    description TEXT,
    color VARCHAR(255),
    cover VARCHAR(255),
    video VARCHAR(255),
    summary VARCHAR(255),
    rating INT NOT NULL CHECK(rating>=0),
    total_copies INT NOT NULL CHECK(total_copies>=0),
    available_copies INT NOT NULL CHECK(available_copies>=0),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES authors(id),
    FOREIGN KEY (genre) REFERENCES categories(category_id)
    
  )`;
}

async function createBorrowedBooksTable() {
  await sql`CREATE TABLE IF NOT EXISTS borrowed_books(
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL,
    book_id INT NOT NULL,
    borrowed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    returned_at TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
  )`;
}

async function fillAuthorsTableWithMockData() {
  await sql`
Insert Into authors (id, name, birthdate, nationality, biography, last_name) VALUES (1, Cesar Lakin, Thu Mar 09 2023 20:17:20 GMT+0100 (Central European Standard Time), Saint Barthelemy, author, foodie, parent, Goodwin);
Insert Into authors (id, name, birthdate, nationality, biography, last_name) VALUES (2, Dr. Jenna Roob, Sat Feb 25 2023 05:43:55 GMT+0100 (Central European Standard Time), Panama, activist, environmentalist, Runolfsson);
Insert Into authors (id, name, birthdate, nationality, biography, last_name) VALUES (3, Drew Luettgen I, Thu Nov 30 2023 15:12:54 GMT+0100 (Central European Standard Time), Portugal, foodie, philosopher, founder ⚙️, Keeling);
Insert Into authors (id, name, birthdate, nationality, biography, last_name) VALUES (4, Jeremiah Hintz MD, Mon Jan 15 2024 19:55:21 GMT+0100 (Central European Standard Time), Bosnia and Herzegovina, middleman junkie  🔣, Waelchi-Homenick);
Insert Into authors (id, name, birthdate, nationality, biography, last_name) VALUES (5, Toby Pfeffer, Thu Mar 23 2023 23:00:42 GMT+0100 (Central European Standard Time), Congo, inventor, activist, Funk);
Insert Into authors (id, name, birthdate, nationality, biography, last_name) VALUES (6, Mr. Lance Cronin, Fri May 19 2023 10:45:33 GMT+0200 (Central European Summer Time), Jordan, parent, author, King);
Insert Into authors (id, name, birthdate, nationality, biography, last_name) VALUES (7, Shaun Yost, Mon Sep 18 2023 06:29:57 GMT+0200 (Central European Summer Time), Burundi, patriot, Powlowski);
Insert Into authors (id, name, birthdate, nationality, biography, last_name) VALUES (8, Milton Mertz, Sun Sep 24 2023 09:49:09 GMT+0200 (Central European Summer Time), India, philosopher, Kiehn);
Insert Into authors (id, name, birthdate, nationality, biography, last_name) VALUES (9, Rolando Casper, Tue May 23 2023 22:56:53 GMT+0200 (Central European Summer Time), Saudi Arabia, cooking enthusiast  👩🏽‍❤️‍💋‍👩🏿, Paucek);
Insert Into authors (id, name, birthdate, nationality, biography, last_name) VALUES (10, Nicole Collins, Wed Sep 20 2023 14:24:04 GMT+0200 (Central European Summer Time), Slovenia, verse enthusiast, Fay);`;
}

async function fillBooksTableWithMockData() {
  await sql`
  
  `;
}

export async function GET() {
  try {
    await sql`BEGIN`;
    await createUUIDExtension();
    // await createUserRolesEnum();
    // await createUserStatusEnum();
    await createAuthorsTable();
    await createCategoriesTable();
    await createBooksTable();
    await createBorrowedBooksTable();
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
        error: "Error creating table - ",
        statusCode: 500,
        message: "Error creating table",
      }),
      { status: 500 }
    );
  }
}
