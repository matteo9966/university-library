import { cn } from "@/lib/utils";
import BookCover from "./BookCover";
type Props = {
  book: BookParams;
};
export default function BookCard({ book }: Props) {
  return (
    <div className="flex flex-col items-center">
      <BookCover
        bookCoverUrl={book.coverUrl}
        variant="regular"
        coverColor={book.coverColor}
        className=""
      ></BookCover>

      <div className={cn("mt-4","xs:w-[174px] w-[114px]")}>
        <p className="book-title">{book.title}</p>
        <p className="book-genre">{book.genre}</p>
      </div>
    </div>
  );
}
