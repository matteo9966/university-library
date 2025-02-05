import Image from "next/image";
import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";
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
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/sign-in", redirect: true });
            }}
          >
            <Button type="submit">Logout</Button>
          </form>
        </li>
      </ul>
    </header>
  );
};

export default Header;
