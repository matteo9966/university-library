"use client";
import BookForm from "@/components/admin/BookForm";
import { DefaultValues, FieldValues } from "react-hook-form";
import { bookDefaultValues } from "@/constants/admin/bookFormDefaultValue";

export default function Page() {
  return <BookForm onSubmit={() => {}} formDefaultValue={bookDefaultValues} />;
}
