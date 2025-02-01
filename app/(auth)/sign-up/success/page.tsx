import Link from "next/link";

const Page = () => {
  return (
    <section>
      <div className="library-subtitle">Sign up process complete</div>
      <p className="text-lg mt-4">
        <span className="text-white">Go to the </span>
        <Link href={"/"} className="text-primary underline hover:scale-[1.01]">
          Homepage
        </Link>
      </p>
    </section>
  );
};

export default Page;
