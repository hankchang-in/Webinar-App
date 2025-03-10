"use client"

import React, { useState } from 'react'
import Spinner from './spinner'
import {signupAPI} from '../api/apiCalls'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2';
import Link from "next/link";


const signup = () => {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [name , setName] = useState('')
    const [isLoading , setIsLoading] = useState(false)
    const router = useRouter()


    const signupSuccess = () => {
        Swal.fire({
          title: 'Success!',
          text: 'Account Create Successfully',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      };
      const signupError = (message) => {
        Swal.fire({
          title: 'Error!',
          text: `${message}`,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      };
    const loginRequest = async ()=>{
        try{
            
        }catch(err){
            console.log(err)            
        }
    }
    
    const handleSignup = async(e)=>{
        e.preventDefault();
        setIsLoading(true)
        try{
            const apiRequest = await signupAPI({name , email , password})
            signupSuccess()
            router.push("/login")
        }catch(err){
            console.log(err)
            setIsLoading(false)
          signupError(err.response.data.message)
        }
        
    }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='w-full max-w-md p-8 bg-white rounded-2xl shadow-lg'>
            <h2 className='text-2xl text-center text-gray-800 mb-6'>Signup</h2>
            <form action="" onSubmit={handleSignup}>
                        <div>
                            <label className='text-sm'>Email</label>
                            <input 
                            type="email" 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            required
                            className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder='Enter your email'
                            />
                        </div>
                        <div>
                            <label className='text-sm'>Name</label>
                            <input 
                            type="text" 
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            required
                            className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder='Enter your full name'
                            />
                        </div>                    
                        <div>
                            <label className='text-sm'>Password</label>
                            <input 
                            type="password" 
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            required
                            className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder='Enter your password'
                            />
                        </div>     
                                       
                    {isLoading ?  (<Spinner></Spinner>) : (<button className='w-full border p-2 rounded-lg text-center bg-blue-500 text-white mt-6 hover:bg-blue-700 transition duration-300' >Signup</button>) }
                    
            </form>
            <p className="text-center text-sm text-gray-600 mt-4">
                  Already have an account ?{" "}
                <Link href="/login" className="text-blue-600 hover:underline">
                  Log In
                </Link>
        </p>
        </div>
        
    </div>
  )
}

export default signup