import Booklist from "@/components/BookList";
import UserProfileCard from "@/components/UserProfileCard";
import { mockUser, sampleBooks } from "@/constants/mockedData";
export default function Page() {
  return (
    <main className="grid md:grid-cols-2 gap-5 grid-cols-1 grid-flow-row">
      <UserProfileCard user={mockUser} />
      <div className="col-span-2 mt-10">
        <Booklist
          
          books={sampleBooks.map((b) => ({
            ...b,
            totalCopies: b.total_copies,
            availableCopies: b.available_copies,
            coverColor: b.color,
            coverUrl: b.cover,
            videoUrl: b.video,
            id: String(b.id),
            createdAt: new Date(),
          }))}
        />
      </div>
    </main>
  );
}
