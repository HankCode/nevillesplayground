"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const NavLinks = [
  { link: "/", name: "Home" },
  { link: "/", name: "Science" },
  { link: "/", name: "Metaphysics" },
  { link: "/", name: "Glossary" },
];

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateNavbar = () => {
      if (
        //Scrolled navbar
        document.documentElement.scrollTop > 150 ||
        document.body.scrollTop > 150
      ) {
        setIsScrolled(true);
      } else if (
        //Initial navbar
        document.documentElement.scrollTop < 151 ||
        document.body.scrollTop < 151
      ) {
        setIsScrolled(false);
      }
    };

    updateNavbar();

    window.addEventListener("scroll", updateNavbar);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbar);
    };
  }, []);

  return (
    <div
      className={`fixed w-full z-30 bg-gray-800 shadow-md border-b border-gray-700 ${
        isScrolled ? "" : ""
      }`}
    >
      <nav
        className={`${!isScrolled ? "lg:py-3 py-2" : "lg:py-1.5 py-1"} ${
          open ? "" : ""
        } w-full transition-all
       duration-200 ease-in-out px-8`}
      >
        <div className="flex flex-wrap items-center justify-between text-base">
          <Link href="/">
            {isScrolled ? (
              <div className="relative block h-auto w-[25px] py-2 md:w-[50px] lg:h-auto lg:py-0">
                <img src="np_logo_con_small.png" alt="NevillesPlayground logo" />
              </div>
            ) : (
              <div className="relative block h-auto w-[50px] lg:h-auto lg:w-[75px]">
                <img src="np_logo_con_small.png" alt="NevillesPlayground logo" />
              </div>
            )}
          </Link>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-200 focus:outline-none lg:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="h-7 w-7" />
          </button>
          <div className={`${open ? "flex" : "hidden"} w-full lg:flex lg:gap-x-6 lg:w-auto`}>
            <ul className="mt-4 flex w-full flex-col gap-y-3 pt-4 pb-8 text-center items-center text-lg lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:pb-4 lg:pt-4">
              {NavLinks.map((navLink, i) => (
                <Link href={navLink.link} key={i} onClick={() => setOpen(false)}>
                  <span
                    className={`${isScrolled ? "lg:text-base" : ""} font-roboto hover:underline`}
                  >
                    {navLink.name}
                  </span>
                </Link>
              ))}
              <div className="mx-auto mt-4 lg:mt-0">
                {/* <Link href="/#getTheApp" onClick={() => setOpen(false)}>
                  Call to action
                </Link> */}
              </div>
            </ul>
            <div>
              <button className="px-16 py-3.5 rounded-full border text-base border-white whitespace-nowrap">
                Call to action
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
