import Image from "next/image";
import { Button } from "./ui/button";
import BookCover from "./BookCover";
export default function BookOverview() {
  return (
    <div className="flex book-overview text-light-100">
      <div className="flex flex-col flex-1">
        <h1>Origin</h1>
        <div className="flex mt-8 gap-4 book-info">
          <p className="">
            By <span className="text-light-200">Dan Brown</span>
          </p>
          <p>
            Category:
            <span> Thriller/suspance</span>
          </p>
          <p className="flex gap-1 align-middle items-center">
            <Image
              src={"/icons/star.svg"}
              width={30}
              height={30}
              alt="start"
            ></Image>
            <span>4.5</span>/5
          </p>
        </div>
        <div className="book-info flex gap-2">
          <p>
            Total books: <span>100</span>
          </p>
          <p>
            Available books: <span>10</span>
          </p>
        </div>
        <p className="mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
          deserunt suscipit sunt at atque unde, voluptate quibusdam dignissimos
          aut voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Totam, dicta.
        </p>
        <Button size={"lg"} className="book-overview_btn">
          <Image
            src="/icons/book.svg"
            alt="book"
            width={30}
            height={30}
          ></Image>
          BORROW BOOK REQUEST
        </Button>
      </div>
      <div className="flex flex-1 relative">
        <div className="z-10">
          <BookCover coverColor="#1bbbbb"></BookCover>
        </div>
        <div className="absolute top-10 left-[25%] rotate-12 opacity-40 blur-sm">
          <BookCover coverColor="#1bbbbb"></BookCover>
        </div>
      </div>
    </div>
  );
}
