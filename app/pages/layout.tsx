import Sidebar from "@/components/Sidenav/Sidenav";
import React from "react";
import SessionWrapper from "@/components/SessionWrapper";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SessionWrapper>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100 w-full">
          {/* Page Content */}
            {children}
        </div>
      </div>
    </SessionWrapper>
  );
};

export default Layout;
