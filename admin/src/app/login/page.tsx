import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import LoginInput from "./loginInput";

const page = () => {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome to Admin Panel</h2>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
       <LoginInput></LoginInput>
       
      </div>
    </div>
  );
}

export default page