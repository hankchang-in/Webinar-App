"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Spinner from "../signup/spinner";
import Link from "next/link";
import {loginAPI} from '../api/apiCalls'
import Swal from 'sweetalert2';
import { useRouter } from "next/router";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading , setIsLoading] = useState(false)
  const router = useRouter()
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    console.log("Logging in with:", { email, password });
    
     const showPopup = (message , type) => {
            Swal.fire({
              title: type,
              text: message,
              icon: type,
              confirmButtonText: 'OK',
            });
          };
         

    // Call your API here
    try{
      const apiRequest = await loginAPI({email , password})
      console.log(apiRequest?.data?.error?.msg)
      if(apiRequest?.status === 200){
        showPopup('Login successful' , 'success')
        router.push("/")

      }

    }catch(err){
      console.log(err)
      showPopup(err?.response?.data?.error? err?.response?.data?.error: 'something went wrong' , 'error')
      setIsLoading(false)
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google Login clicked");
    // Integrate Google Authentication here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
            {isLoading ? (<Spinner></Spinner>) : (<button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>)}
          
        </form>
        <div className="mt-4 flex items-center justify-between">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="w-full border-gray-300" />
        </div>
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center border p-3 mt-4 rounded-lg hover:bg-gray-100 transition duration-300"
        >
          <FcGoogle className="text-xl mr-2" /> Sign in with Google
        </button>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link  href="/signup" className="text-blue-600 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}


  
