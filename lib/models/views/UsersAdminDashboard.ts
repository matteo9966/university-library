import { User } from "../User";

export interface AdminDashboardUser {
  id: string; // UUID
  email: string;
  created_at: Date;
  updated_at: Date;
  full_name: string;
  role: "admin" | "user";
  status: "pending" | "subscribed";
  university_card_image: string;
  university_id_number: string;
  borrowed: number;
}
