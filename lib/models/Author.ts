export interface Author {
  id: number; // SERIAL
  name: string;
  birthdate: Date | null;
  nationality: string | null;
  biography: string | null;
  created_at: Date;
  updated_at: Date;
}
