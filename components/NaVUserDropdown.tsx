"use client";

import { FaUserCircle } from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaBars } from "react-icons/fa";
import { useSession } from "next-auth/react";
import Link from "next/link";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const NaVUserDropdown = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const { data: session, status } = useSession();

  return (
    <Menu as="div" className="relative hidden text-left lg:inline-block">
      <div>
        <Menu.Button
          className="inline-flex w-full justify-center rounded-full border border-gray-600 
        px-4 py-2 text-sm text-gray-700 hover:shadow-md hover:shadow-gray-950 focus:outline-none"
        >
          <div className="text-3xl text-gray-500 flex gap-x-2.5 items-center">
            <FaBars className="w-5 h-5" />
            <FaUserCircle className="" />
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {status && status === "authenticated" ? (
            <>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/protected/dashboard"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Neville portal
                    </Link>
                  )}
                </Menu.Item>
                {/* <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Registrera användare
                    </a>
                  )}
                </Menu.Item> */}
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/auth/signout"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Logga ut
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </>
          ) : (
            <>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/auth/signin"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                      onClick={() => setModalOpen(true)}
                    >
                      Sign in
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/auth/signup"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Sign up
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Bli producent
                    </a>
                  )}
                </Menu.Item>
              </div>
            </>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NaVUserDropdown;
