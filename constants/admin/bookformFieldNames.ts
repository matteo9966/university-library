export const FIELD_NAMES: Omit<
  Record<keyof Book, string>,
  "id" | "created_at" | "updated_at" | "video"
> = {
  author_id: "Author",
  title: "Title",
  genre: "Genre",
  price: "Price",
  rating: "Rating",
  description: "Description",
  total_copies: "Total copies",
  available_copies: "Available copies",
  color: "Color",
  cover: "Cover",
  summary: "Summary",
};

type inputType = "text" | "file" | "color" | "text-area" | "select" | "tag";

export const FieldTypes: Omit<
  Record<keyof Book, inputType>,
  "id" | "created_at" | "updated_at" | "video"
> = {
  author_id: "select",
  title: "text",
  genre: "tag",
  price: "text",
  rating: "text",
  description: "text-area",
  total_copies: "text",
  available_copies: "text",
  color: "color",
  cover: "file",
  summary: "text-area",
};
