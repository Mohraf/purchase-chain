"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/pages/dashboard" },
  { name: "Posted LPOs", href: "/pages/postedLpos" },
  { name: "First Approved LPOs", href: "/pages/firstapproved" },
  { name: "Second Approved LPOs", href: "/pages/secondapproved" },
  { name: "Final Approved LPOs", href: "/pages/finalapproved" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null); // Create a ref for the sidebar

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false); // Close sidebar if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname?.startsWith(path);
  };

  return (
    <div className="h-screen">
      {/* Toggle Button - Always Visible on Small Screens */}
      <button
        className="fixed top-6 left-1 z-50 p-2 bg-white text-[#004aad] rounded-md md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 min-h-screen left-0 bg-[#004aad] text-white w-64 p-5 transform transition-transform duration-300 md:relative md:translate-x-0 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:flex md:flex-col`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-center items-center mb-6">
          <h2 className="text-xl font-bold bg-blue-700 px-2 py-1 text-center rounded-sm w-full">PURCHASE CHAIN</h2>
        </div>
        
        <nav className="mt-4 md:mt-0">
          <ul>
            {navItems.map((item) => (
              <li key={item.href} className="mb-4">
                <Link
                  href={item.href}
                  className={`block px-4 py-2 rounded ${pathname === item.href ? 'bg-[#0003ad]' : 'hover:bg-[#0003ad]'}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>      
    </div>
  );
}
