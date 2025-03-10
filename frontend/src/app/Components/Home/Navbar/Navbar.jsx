"use client"
import Link from 'next/link'
import { useEffect , useState } from 'react';
import {jwtDecode} from "jwt-decode";
export default function Navbar() {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        // console.log(jwtDecode)
        const token = document.cookie
            .split("; ")
            .find((row) => row.startsWith("token="))
            ?.split("=")[1];

        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUserData(decoded);
                // console.log();
            } catch (error) {
                console.error("Invalid Token", error);
            }
        }
    }, []);
        return (
        <div className="">
            <ul className="flex pb-10">
                <Link href="/">
                <li className="pl-10 p-2 text-black text-l ">Home</li>
                </Link>
                <Link href="/">
                <li className="pl-10 p-2 text-black text-l">Shop</li>
                </Link>
                <Link href="/">
                <li className="pl-10 p-2 text-black text-l">Profile</li>
                </Link>
                {
                    userData?.role === 'admin' && (
                        <Link href="/admin">
                            <li className="pl-10 p-2 text-black text-l">Admin</li>
                        </Link>
                    )
                }
                
            </ul>
        </div>
    )
}