import { cn } from "@/lib/utils";
import BookCoverSvg from "./BookCoverSvg";
import Image from "next/image";

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  extraSmall: "book-cover_extra_small",
  small: "book-cover_small",
  medium: "book-cover_medium",
  regular: "book-cover_regular",
  wide: "book-cover_wide",
};

export default function BookCover({
  coverColor,
  variant = "regular",
}: {
  coverColor: string;
  variant?: BookCoverVariant;
}) {
  return (
    <div className={cn("book-cover relative", variantStyles[variant])}>
        <BookCoverSvg coverColor={coverColor} />
      <img
        
        src="https://placehold.co/400x600.png"
        alt="cover"
        className="absolute  w-[90%] h-[87%] m-auto left-[12%] rounded-lg"
      ></img>
    </div>
  );
}
