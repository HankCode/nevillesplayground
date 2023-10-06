"use client";

import Sidebar from "@/components/Sidebar";
import { useSession } from "next-auth/react";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();

  if (!session || !session.user?.email) {
    return <div className="pt-48 bg-transparent min-h-screen">Unauthorized.</div>;
  } else {
    return <>{children}</>;
  }
};

export default ProtectedLayout;
