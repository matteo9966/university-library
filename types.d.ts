interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  rating: number;
  totalCopies: number;
  availableCopies: number;
  description: string;
  coverColor: string;
  coverUrl: string;
  videoUrl: string;
  summary: string;
  createdAt: Date | null;
}

interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;

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
  }
}
