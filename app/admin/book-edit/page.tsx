import BookForm from "@/components/admin/BookForm";
import sql from "@/lib/db";
import { bookDefaultValues } from "@/constants/admin/bookFormDefaultValue";

export default async function Page() {
  const result: Authors[] = await sql`select * from authors_view`;
  console.log(result);

  return <BookForm formDefaultValue={bookDefaultValues} authors={result} />;
}
