"use client";

import { useSession } from "next-auth/react";
import { AiFillHome, AiFillEye } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";

import Sidebar, { SidebarItem } from "@/components/Sidebar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();

  if (!session || !session.user?.email) {
    return <div className="pt-48 bg-transparent min-h-screen">Unauthorized.</div>;
  } else {
    return (
      <div className="flex">
        <Sidebar>
          <SidebarItem
            icon={<AiFillHome className="w-5 h-5 md:w-6 md:h-6" />}
            text="Dashboard"
            link={"/protected/dashboard"}
          />
          <SidebarItem
            icon={<AiFillEye className="w-5 h-5 md:w-6 md:h-6" />}
            text="My states"
            link={"/protected/dashboard/states"}
          />
          <SidebarItem
            icon={<BiMessageDetail className="w-5 h-5 md:w-6 md:h-6" />}
            text="Messages"
            link={"/protected/dashboard/messages"}
          />
        </Sidebar>
        {children}
      </div>
    );
  }
};

export default ProtectedLayout;
