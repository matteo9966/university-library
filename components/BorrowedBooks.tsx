import { sampleBooks } from "@/constants/mockedData";
import BookCard from "./BookCard";

export default function BorrowedBooks() {
  return (
    <div>
      <h1 className="text-xl text-white/50 mb-4">Borrowed books</h1>
      <div className="grid grid-cols-2 gap-2">
        {sampleBooks
          .slice(0, 4)
          .map((b) => ({
            ...b,
            totalCopies: b.total_copies,
            availableCopies: b.available_copies,
            coverColor: b.color,
            coverUrl: b.cover,
            videoUrl: b.video,
            id: String(b.id),
            createdAt: new Date(),
          }))
          .map((book: Book) => {
            return (
              <BookCard
              key={book.id}
                book={{
                  author: book.author,
                  coverColor: book.coverColor,
                  coverUrl: book.coverUrl,
                  description: book.description,
                  genre: book.genre,
                  rating: 5,
                  summary: book.summary,
                  title: book.title,
                  totalCopies: 0,
                  videoUrl: book.videoUrl,
                }}
              />
            );
          })}
      </div>
    </div>
  );
}
