"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { useSession } from "next-auth/react";

const NavLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Terminology",
    href: "/terminology",
  },
  {
    name: "Link 3",
    href: "#",
  },
  {
    name: "Link 4",
    href: "#",
  },
];

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { data: session, status } = useSession();

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="flex mx-auto justify-between md:px-8 px-6">
        {/* Primary menu and logo */}
        <div className="flex items-center gap-16 py-3 lg:py-7 w-full">
          <Link href="/">
            <div className="relative block h-auto w-[50px] lg:h-auto lg:w-[75px]">
              <img src="/np_logo_con_small.png" alt="NevillesPlayground logo" />
            </div>
          </Link>

          {/* Desktop screen navlinks */}
          <div className="hidden lg:flex gap-7 text-lg">
            {NavLinks.map((link, i) => {
              return (
                <Link key={i} href={link.href}>
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
        {/* Desktop screen right menu */}
        <div className="flex gap-6 text-xl">
          <div className="hidden lg:flex items-center whitespace-nowrap gap-2">
            {status && status === "authenticated" ? (
              <div className="flex items-center gap-x-6">
                <Link href="/protected/dashboard" className="whitespace-nowrap">
                  Dashboard
                </Link>
                <Link href="/auth/signout">Logga ut</Link>
              </div>
            ) : (
              <div className="flex items-center gap-x-6">
                <Link href="/auth/signup" className="whitespace-nowrap">
                  Sign up
                </Link>
                <Link href="/auth/signin">Sign in</Link>
              </div>
            )}
          </div>
        </div>
        {/* Mobile navigation toggle */}
        <div className="lg:hidden flex items-center transition-all">
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            {toggleMenu ? <AiOutlineClose className="h-7 w-7" /> : <FaBars className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* mobile navigation */}
      <div
        className={`fixed z-40 w-full overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 bg-gradient-to-b from-gray-800 to-gray-950 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="mx-auto text-center text-2xl mt-20">
          <div className="flex flex-col gap-8 font-bold tracking-wider">
            {NavLinks.map((link, i) => {
              return (
                <Link key={i} href={link.href} onClick={() => setToggleMenu(false)}>
                  {link.name}
                </Link>
              );
            })}
            {status && status === "authenticated" ? (
              <div className="flex items-center flex-col gap-8 mt-10 font-bold">
                <Link
                  href="/protected/dashboard"
                  className="whitespace-nowrap"
                  onClick={() => setToggleMenu(false)}
                >
                  Dashboard
                </Link>
                <Link href="/auth/signout" onClick={() => setToggleMenu(false)}>
                  Logout
                </Link>
              </div>
            ) : (
              <Link href="/auth/signup" className="whitespace-nowrap">
                Sign up
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

// <div className={`w-full z-30 bg-gray-800 shadow-md border-b border-gray-700`}>
//   <nav
//     className={` w-full transition-all
//    duration-200 ease-in-out xmargin 2xl:px-16 py-2 md:py-5`}
//   >
//     <div className="flex flex-wrap items-center justify-between text-base">
//       <Link href="/">
//         <div className="relative block h-auto w-[50px] lg:h-auto lg:w-[75px]">
//           <img src="/np_logo_con_small.png" alt="NevillesPlayground logo" />
//         </div>
//       </Link>
//       <div className="flex items-center gap-x-14 text-gray-300">
//         <div className="flex gap-x-6 items-center">
//           <Link href="/terminology">Glossary</Link>
//         </div>
//         <div className="flex items-center gap-x-7 font-medium">
//           {!session && <Link href="/auth/signup">Register today</Link>}

//           <NaVUserDropdown />
//         </div>
//       </div>
//     </div>
//   </nav>
// </div>
