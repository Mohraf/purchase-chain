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
        <main className="p-6 bg-gray-100 w-full">
          {/* Page Content */}
            {children}
        </main>
      </div>
    </SessionWrapper>
  );
};

export default Layout;
