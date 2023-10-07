import React from "react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import NaVUserDropdown from "./NaVUserDropdown";

const NavBar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className={`w-full z-30 bg-gray-800 shadow-md border-b border-gray-700`}>
      <nav
        className={` w-full transition-all
       duration-200 ease-in-out xmargin 2xl:px-16 py-2 md:py-5`}
      >
        <div className="flex flex-wrap items-center justify-between text-base">
          <Link href="/">
            <div className="relative block h-auto w-[50px] lg:h-auto lg:w-[75px]">
              <img src="/np_logo_con_small.png" alt="NevillesPlayground logo" />
            </div>
          </Link>
          <div className="flex items-center gap-x-14 text-gray-300">
            <div className="flex gap-x-6 items-center">
              <Link href="/terminology">Glossary</Link>
            </div>
            <div className="flex items-center gap-x-7 font-medium">
              {!session && <Link href="/auth/signup">Register today</Link>}

              <NaVUserDropdown />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
