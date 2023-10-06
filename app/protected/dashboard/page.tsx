"use client";

import Sidebar, { SidebarItem } from "@/components/Sidebar";
import { BarChart3 } from "lucide-react";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();

  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem icon={<BarChart3 size={20} />} text="Feed" active />
        <SidebarItem icon={<BarChart3 size={20} />} text="Metaphysics" />
        <SidebarItem icon={<BarChart3 size={20} />} text="Statistics" />
        <SidebarItem icon={<BarChart3 size={20} />} text="Courses" />
      </Sidebar>
      <div className="text-3xl text-center">
        {session && session.user?.email && (
          <span>Welcome {session.user.email} is the dashboard</span>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
