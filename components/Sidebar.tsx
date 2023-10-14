import { GoArrowLeft } from "react-icons/go";
import { AiOutlineMore } from "react-icons/ai";
import { useContext, createContext, useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";
import Link from "next/link";

const SidebarContext = createContext();

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col text-gray-400 bg-gray-800 border-r border-gray-700 shadow-sm">
        <div
          className={`${expanded ? "justify-end" : "justify-center"} p-4 pb-2 flex items-center`}
        >
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 md:p-2 rounded-lg bg-gray-900 hover:bg-gray-950"
          >
            {expanded ? <GoArrowLeft size={25} /> : <LiaBarsSolid size={25} />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t border-gray-700 flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-32 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-lg">Henrik Näsmark</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <AiOutlineMore size={25} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

type SideBarItemProps = {
  icon: React.ReactNode;
  text: string;
  active: boolean;
  alert: string;
  link: string;
};

import { usePathname } from "next/navigation";

export function SidebarItem({ icon, text, alert, link }: SideBarItemProps) {
  const { expanded }: any = useContext(SidebarContext);
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <Link href={link}>
      <li
        className={`
        relative flex items-center md:py-3.5 md:px-4 py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          isActive
            ? "bg-gradient-to-tr from-gray-700 to-gray-600 text-gray-200"
            : "hover:bg-gray-700 text-gray-400"
        }
    `}
      >
        {icon}
        <span
          className={`overflow-hidden whitespace-nowrap transition-all ${
            expanded ? "w-32 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}
          />
        )}

        {!expanded && (
          <div
            className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-gray-500 text-gray-50 text-sm  whitespace-nowrap
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
          >
            {text}
          </div>
        )}
      </li>
    </Link>
  );
}
