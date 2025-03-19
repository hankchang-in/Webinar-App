'use client'
import { useState } from "react";
import { Home, User, Settings, Menu } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white h-screen p-5 pt-8 duration-300 ${
          isOpen ? "w-60" : "w-20"
        }`}
      >
        <div className="flex items-center gap-2 pb-6">
          <Menu
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
          <h1 className={`text-lg font-semibold duration-300 ${!isOpen && "hidden"}`}>Sidebar</h1>
        </div>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-gray-700">
            <Home />
            <span className={`${!isOpen && "hidden"}`}>Dashboard</span>
          </li>
          <li className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-gray-700">
            <User />
            <span className={`${!isOpen && "hidden"}`}>Profile</span>
          </li>
          <li className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-gray-700">
            <Settings />
            <span className={`${!isOpen && "hidden"}`}>Settings</span>
          </li>
        </ul>
      </div>
      {/* Main Content */}
      {/* <div className="flex-1 p-5">
        <h2 className="text-2xl font-bold">Main Content</h2>
      </div> */}
    </div>
  );
}
