import sql from "@/lib/db";
import { responseBuilder } from "@/lib/responseBuilder";

function convertJSONobjectToInsertIntoSQLQueryForBookTable(data: Book) {
    return `INSERT INTO books (id, title, author_id, genre, price, description, color, cover, video, summary, rating, total_copies, available_copies) 
            VALUES (${data.id}, ${data.title}, ${data.author_id}, ${data.genre}, ${data.price}, ${data.description}, ${data.color},${data.cover},${data.video}, ${data.summary}, ${data.rating}, ${data.total_copies}, ${data.available_copies});`;
  }
  
  export const sampleBooks: Book[] = [
    {
      id: 1,
      title: "The Midnight Library",
      genre: 1,
      rating: 4.6,
      price: "20.00",
      description:
        "A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death.",
      color: "#1c1f40",
      cover: "https://m.media-amazon.com/images/I/81J6APjwxlL.jpg",
      video: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death. A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death.",
      author_id: 1,
      total_copies: 20,
      available_copies: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      title: "Atomic Habits",
      genre: 2,
      rating: 4.9,
  
      description:
        "A revolutionary guide to making good habits, breaking bad ones, and getting 1% better every day.",
      color: "#fffdf6",
      cover: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg",
      video: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "A revolutionary guide to making good habits, breaking bad ones, and getting 1% better every day.",
      author_id: 1,
      total_copies: 20,
      available_copies: 10,
      created_at: new Date(),
      updated_at: new Date(),
      price: "30.00",
    },
    {
      id: 3,
      title: "You Don't Know JS: Scope & Closures",
      genre: 2,
      rating: 4.7,
      description:
        "An essential guide to understanding the core mechanisms of JavaScript, focusing on scope and closures.",
      color: "#f8e036",
      cover:
        "https://m.media-amazon.com/images/I/7186YfjgHHL._AC_UF1000,1000_QL80_.jpg",
      video: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "An essential guide to understanding the core mechanisms of JavaScript, focusing on scope and closures.",
      author_id: 1,
      total_copies: 20,
      available_copies: 10,
      created_at: new Date(),
      updated_at: new Date(),
      price: "30.00",
    },
    {
      id: 4,
      title: "The Alchemist",
  
      genre: 2,
      rating: 4.5,
  
      description:
        "A magical tale of Santiago, an Andalusian shepherd boy, who embarks on a journey to find a worldly treasure.",
      color: "#ed6322",
      cover:
        "https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg",
      video: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "A magical tale of Santiago, an Andalusian shepherd boy, who embarks on a journey to find a worldly treasure.",
      author_id: 1,
      total_copies: 20,
      available_copies: 10,
      created_at: new Date(),
      updated_at: new Date(),
      price: "210.00",
    },
    {
      id: 5,
      title: "Deep Work",
  
      genre: 3,
      rating: 4.7,
  
      description:
        "Rules for focused success in a distracted world, teaching how to cultivate deep focus to achieve peak productivity.",
      color: "#ffffff",
      cover: "https://m.media-amazon.com/images/I/81JJ7fyyKyS.jpg",
      video: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "Rules for focused success in a distracted world, teaching how to cultivate deep focus to achieve peak productivity.",
      author_id: 1,
      total_copies: 20,
      available_copies: 10,
      created_at: new Date(),
      updated_at: new Date(),
      price: "30.00",
    },
    {
      id: 6,
      title: "Clean Code",
  
      genre: 4,
      rating: 4.8,
      total_copies: 56,
      available_copies: 56,
      description:
        "A handbook of agile software craftsmanship, offering best practices and principles for writing clean and maintainable code.",
      color: "#080c0d",
      cover:
        "https://m.media-amazon.com/images/I/71T7aD3EOTL._UF1000,1000_QL80_.jpg",
      video: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "A handbook of agile software craftsmanship, offering best practices and principles for writing clean and maintainable code.",
      author_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      price: "30.00",
    },
    {
      id: 7,
      title: "The Pragmatic Programmer",
  
      genre: 3,
      rating: 4.8,
      total_copies: 25,
      available_copies: 3,
      description:
        "A timeless guide for developers to hone their skills and improve their programming practices.",
      color: "#100f15",
      cover:
        "https://m.media-amazon.com/images/I/71VStSjZmpL._AC_UF1000,1000_QL80_.jpg",
      video: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "A timeless guide for developers to hone their skills and improve their programming practices.",
      author_id: 1,
  
      created_at: new Date(),
      updated_at: new Date(),
      price: "30.00",
    },
    {
      id: 8,
      title: "The Psychology of Money",
      genre: 5,
      rating: 4.8,
      total_copies: 10,
      available_copies: 5,
      description:
        "Morgan Housel explores the unique behaviors and mindsets that shape financial success and decision-making.",
      color: "#ffffff",
      cover:
        "https://m.media-amazon.com/images/I/81Dky+tD+pL._AC_UF1000,1000_QL80_.jpg",
      video: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "Morgan Housel explores the unique behaviors and mindsets that shape financial success and decision-making.",
      author_id: 1,
  
      created_at: new Date(),
      updated_at: new Date(),
      price: "30.00",
    },
  ];

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
    const bookInsertQuery = sampleBooks.map(book=>convertJSONobjectToInsertIntoSQLQueryForBookTable(book)).join(' ');
    await sql`${bookInsertQuery}`;
  }

  async function createCategoriesData(){
    await sql`INSERT INTO categories (category_name) VALUES ('Computer Science / Programming')`;
    await sql`INSERT INTO categories (category_name) VALUES ('Philosophy / Adventure')`;
    await sql`INSERT INTO categories (category_name) VALUES ('Self-Help / Productivity')`;
    await sql`INSERT INTO categories (category_name) VALUES ('Finance / Self-Help')`;
    await sql`INSERT INTO categories (category_name) VALUES ('Computer Science / JavaScript')`;
    await sql`INSERT INTO categories (category_name) VALUES ('Computer Science / Programming')`;
    await sql`INSERT INTO categories (category_name) VALUES ('Philosophy / Adventure')`;
    await sql`INSERT INTO categories (category_name) VALUES ('Self-Help / Productivity')`;
    await sql`INSERT INTO categories (category_name) VALUES ('Finance / Self-Help')`;
    await sql`INSERT INTO categories (category_name) VALUES ('Computer Science / JavaScript')`;
  }

export async function GET(){
 try {
    await sql`BEGIN`;
    await fillAuthorsTableWithMockData();
    await fillBooksTableWithMockData();
    await createCategoriesData();
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
 }
}