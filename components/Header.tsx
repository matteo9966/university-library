import Image from "next/image";
import { Button } from "@/components/ui/button";
const Header = () => {
  return (
    <header className="my-10 flex justify-between gap-5">
      <Image
        src={"/icons/logo.svg"}
        alt="application logo"
        width={40}
        height={40}
      ></Image>
      <h1 className="text-white">BookWise</h1>
      <ul>
        <li>
            <Button>Logout</Button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
