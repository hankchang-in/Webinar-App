'use client'
import { useState } from "react";
import { Home, User, Settings, Menu } from "lucide-react";
import Dashboard from "../Home/Dashboard/Dashboard";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
        <Dashboard></Dashboard>
    </div>
  );
}
