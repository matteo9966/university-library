interface Book {
  id: string | number;
  title: string;
  author_id: string | number;
  genre: string | number;
  price: string;
  rating: number;
  description: string;
  total_copies: number;
  available_copies?: number;
  color: string;
  cover: string;
  video: string;
  summary: string;
  created_at: Date | null;
  updated_at: Date | null;
}

interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  universityCardUrl: string;
  univerisityIDNumber: string;
}

interface BookParams {
  title: string;
  author: string;
  genre: string;
  rating: number;
  coverUrl: string;
  coverColor: string;
  description: string;
  totalCopies: number;
  videoUrl: string;
  summary: string;
}

interface Authors {
  id: string;
  name: string;
  birthdate: Date;
  nationality: string;
  biography: string;
  created_at: Date;
  updated_at: Date;
}

interface BorrowBookParams {
  bookId: string;
  userId: string;
}

namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_PUBLIC_KEY: string;
    NEXT_PUBLIC_URL_ENDPOINT: string;
    PRIVATE_KEY: string;
    DATABASE_URL: string;
    AUTH_SECRET: string;
    UPSTASH_URL: string;
    UPSTASH_TOKEN: string;
    QSTASH_URL: string;
    QSTASH_TOKEN: string;
    QSTASH_CURRENT_SIGNING_KEY: string;
    QSTASH_NEXT_SIGNING_KEY: string;
    ENV: string;
  }
}
