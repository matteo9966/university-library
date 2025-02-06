import { cn } from "@/lib/utils";
import BookCoverSvg from "./BookCoverSvg";
// import Image from "next/image";

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  extraSmall: "w-[28.95px] h-10",
  small: "w-[55px] h-[76px]",
  medium: "w-[144px] h-[199px]",
  regular: "xs:w-[174px] w-[114px] xs:h-[239px] h-[169px]",
  wide: "xs:w-[296px] w-[256px] xs:h-[404px] h-[354px]",
};

export default function BookCover({
  coverColor,
  variant = "regular",
  bookCoverUrl = "https://placehold.co/400x600.png",
  className = "",
}: {
  coverColor: string;
  variant?: BookCoverVariant;
  className: string;
  bookCoverUrl: string;
}) {
  return (
    <div
      className={cn("book-cover relative", variantStyles[variant], className)}
    >
      <BookCoverSvg coverColor={coverColor} />
      <img
        src={bookCoverUrl}
        loading="lazy"
        alt="cover image"
        className="absolute  w-[90%] h-[87%] m-auto left-[12%] rounded-lg"
      ></img>
    </div>
  );
}
