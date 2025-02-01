import Image from "next/image";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-pattern h-screen w-screen">
      <section className="flex-1 flex justify-center items-center">
        <div className="flex flex-col rounded gradient-vertical p-10 w-full md:max-w-[500px]">
          <div className="flex gap-3 items-center">
            <Image
              src={"/icons/logo.svg"}
              width={60}
              height={60}
              alt="the logo"
            ></Image>
            <span className="text-white text-2xl">BookWise</span>
          </div>
          <div className="mt-6 ">
            {children}
          </div>
        </div>
      </section>
      <section className="flex-1 auth-illustration">
        <Image
          src="/images/auth-illustration.png"
          alt="auth-illustration"
          className=" object-cover size-full"
          width={1000}
          height={1000}
        />
      </section>
    </div>
  );
}
