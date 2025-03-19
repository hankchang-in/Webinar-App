'use client'
import Navbar from '../Navbar/Navbar';
import Crousel from '../HomeCrousel/Crousel';
import { useSession ,SessionProvider} from 'next-auth/react';
import { useEffect , useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {jwtDecode} from "jwt-decode";


export default function HomeBanner() {
    const { data: session } = useSession(); // ✅ Ab Session Milega
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const status = useSelector((state) => state.user.status);
    const [userData, setUserData] = useState(null);
       
    useEffect(() => {
    //    console.log(jwtDecode)
       const token = document.cookie
       .split("; ")
       .find((row) => row.startsWith("token="))
       ?.split("=")[1];
    console.log(token)
   if (token) {
       try {
           const decoded = jwtDecode(token);
           setUserData(decoded);
           console.log(decoded.role);
       } catch (error) {
           console.error("Invalid Token", error);
       }
   }
      console.log(session?.user?.name ,  user , status );
    },[])
    console.log(userData);
    return(
        <div className=" items-center justify-center h-screen bg-gradient-to-r from-gray-200 to-gray-400">
            <div>
                <Navbar></Navbar>
            </div>
            <div className="text-center">
                <h1 className="text-5xl font-bold text-gray-500">Webinar App</h1>
                <p className=" font-bold text-gray-500">A place where you can try your luck and win</p>
                <p className=" font-bold text-gray-400">A place where you can try your luck and win</p>
                <p className=" font-bold text-gray-300">A place where you can try your luck and win</p>
                <p className=" font-bold text-gray-200">A place where you can try your luck and win</p>
                <p className=" font-bold text-gray-100">A place where you can try your luck and win</p>
                <p className=" font-bold text-gray-50">A place where you can try your luck and win</p>
                <button className="bg-blue-300 text-black m-3 px-6 py-2 rounded hover:bg-blue-700">Try you Luck</button>
            </div>
            <div>
            <Crousel></Crousel>
            </div>
        </div>
    )
}