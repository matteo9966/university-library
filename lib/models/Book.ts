export interface Book {
  id: number; // SERIAL
  title: string;
  price: number;
  description: string | null;
  color: string | null;
  cover: string | null;
  video: string | null;
  summary: string | null;
  rating: number;
  total_copies: number;
  available_copies: number;
  created_at: Date;
  updated_at: Date;
}
