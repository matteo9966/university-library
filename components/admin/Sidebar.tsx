import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

function Sidebar() {
  return (
    <div className=" h-[100vh] flex flex-col">
      <div className="flex items-center gap-2 admin-logo">
        <Image
          src={"/icons/admin/logo.svg"}
          width={40}
          height={40}
          alt="Logo"
        />
        <h1>Book Dashboard</h1>
      </div>
      <div className="p-2 flex flex-col justify-between flex-grow">
        <ul className="flex flex-col">
          <li className="p-6 flex items-center gap-2 sidebar-item">
            <Image
              src={"/icons/admin/home.svg"}
              width={30}
              height={30}
              alt="home"
            ></Image>
            <span className="text-xl font-[500]">Home</span>
          </li>
          <li className="p-6 flex items-center gap-2 sidebar-item">
            <Image
              src={"/icons/admin/home.svg"}
              width={30}
              height={30}
              alt="home"
            ></Image>
            <span className="text-xl font-[500]">Home</span>
          </li>
          <li className="p-6 flex items-center gap-2 selected sidebar-item">
            <Image
              src={"/icons/admin/home.svg"}
              width={30}
              height={30}
              alt="home"
            ></Image>
            <span className="text-xl font-[500]">Home</span>
          </li>
        </ul>
        <div className="w-full border-slate-200 border rounded-full p-2 flex items-center gap-2">
          <AvatarDemo />
          <div className="flex flex-col">
            <span className="text-lg">Matteo T</span>
            <span className="text-[16px] text-slate-400">
              matteo@tommasi.it
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
