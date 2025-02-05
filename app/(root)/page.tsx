import { auth } from "@/auth";
import BookOverview from "@/components/BookOverview";
import { redirect } from "next/navigation";
// import path from "path";
export default async function Home() {
  const session =await auth();
  if(!session)
    redirect('/sign-in');
  console.log("root/page.tsx",{session});
  return (
 <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <BookOverview />
 </div>
  );
}
