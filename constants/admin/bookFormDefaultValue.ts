export const bookDefaultValues: Omit<
  Record<keyof Book, string>,
  "id" | "created_at" | "updated_at"
> = {
  author_id: "",
  title: "",
  genre: "",
  price: "",
  rating: "",
  description: "",
  total_copies: "",
  available_copies: "",
  color: "",
  cover: "",
  video: "",
  summary: "",
};
