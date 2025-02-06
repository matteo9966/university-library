import { cn } from "@/lib/utils";
import BookCover from "./BookCover";
type Props = {
  book: BookParams;
};
export default function BookCard({ book }: Props) {
  return (
    <div>
      <BookCover
        bookCoverUrl={book.coverUrl}
        variant="regular"
        coverColor={book.coverColor}
        className=""
      ></BookCover>

      <div className={cn("mt-4")}>
        <p className="book-title">{book.title}</p>
        <p className="book-genre">{book.genre}</p>
      </div>
    </div>
  );
}
