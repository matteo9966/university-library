export interface User {
  id: string; // UUID
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
  university_id_number: string;
  university_card_image: string;
  role: "admin" | "user";
  full_name: string;
  status: "pending" | "subscribed";
}
