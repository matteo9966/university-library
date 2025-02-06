import BookCard from "./BookCard";
import BookCover from "./BookCover";
type Props = {
  books: Book[];
};
const BookList = (props: Props) => {
  const { books } = props;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {books.map((book: Book) => {
        return <BookCard book={book} key={book.id}/>;
      })}
    </div>
  );
};

export default BookList;
