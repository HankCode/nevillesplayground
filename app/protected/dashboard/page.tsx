"use client";

import Sidebar, { SidebarItem } from "@/components/Sidebar";
import { AiFillHome } from "react-icons/ai";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();

  return (
    <div className="mx-auto text-center mt-16">
      <div className="md:text-3xl text-2xl text-center mx-auto">Welcome to the dashboard</div>
      {session && session.user?.email && <span>Logged in as {session.user.email}</span>}
    </div>
  );
};

export default Dashboard;
