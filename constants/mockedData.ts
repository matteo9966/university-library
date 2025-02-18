export const navigationLinks = [
  {
    href: "/library",
    label: "Library",
  },

  {
    img: "/icons/user.svg",
    selectedImg: "/icons/user-fill.svg",
    href: "/my-profile",
    label: "My Profile",
  },
];

export const adminSideBarLinks = [
  {
    img: "/icons/admin/home.svg",
    route: "/admin",
    text: "Home",
  },
  {
    img: "/icons/admin/users.svg",
    route: "/admin/users",
    text: "All Users",
  },
  {
    img: "/icons/admin/book.svg",
    route: "/admin/books",
    text: "All Books",
  },
  {
    img: "/icons/admin/bookmark.svg",
    route: "/admin/book-requests",
    text: "Borrow Requests",
  },
  {
    img: "/icons/admin/user.svg",
    route: "/admin/account-requests",
    text: "Account Requests",
  },
];

/* 
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
  
  */

function convertJSONobjectToInsertIntoSQLQueryForBookTable(data: Book) {
  return `INSERT INTO books (id, title, author_id, genre, price, description, color, cover, video, summary, rating, total_copies, available_copies) 
          VALUES (${data.id}, ${data.title}, ${data.author_id}, ${data.genre}, ${data.price}, ${data.description}, ${data.color},${data.cover},${data.video}, ${data.summary}, ${data.rating}, ${data.total_copies}, ${data.available_copies})`;
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
    genre: "Self-Help / Productivity",
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
    genre: "Computer Science / JavaScript",
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

    genre: "Philosophy / Adventure",
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

    genre: "Self-Help / Productivity",
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

    genre: "Computer Science / Programming",
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

    genre: "Computer Science / Programming",
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

    genre: "Finance / Self-Help",
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

export const mockUser: AuthCredentials = {
  email: "matteo@tommasi.ti",
  fullName: "Matteo Tommasi",
  password: "",
  univerisityIDNumber: "234234234",
  universityCardUrl: "https://placehold.co/600x400",
};
