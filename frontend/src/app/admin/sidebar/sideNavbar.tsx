"use client"; // Next.js mein client component ke liye

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname(); // Current page ka path lene ke liye

  const menuItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Users", path: "/admin/users" },
    { name: "Products", path: "/admin/products" },
    { name: "Orders", path: "/admin/orders" },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.path} className="mb-2">
            <Link
              href={item.path}
              onClick={(e) => {
                console.log(pathname, item.path);
                // e.preventDefault();
                // if (pathname === item.path) e.preventDefault(); // Agar already isi page pe ho to prevent kar do
              }}
              className={`block p-2 rounded-lg transition ${
                pathname === item.path ? "bg-blue-500" : "hover:bg-gray-700"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
