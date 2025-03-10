import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'
// require('dotenv').config(); 

export async function middleware(req:NextRequest) {
    const publicRoutes = ["/login", "/signup"]; // Routes that don't need authentication
    const token = req.cookies.get("token")?.value; // Get token from cookies
 
    // Allow access to public routes
    if (publicRoutes.includes(req.nextUrl.pathname)) {
        return NextResponse.next();
    }

    // If token is missing, redirect to login
    if (!token ) {
        return NextResponse.redirect(new URL("/login", req.url));
    }else{
        return NextResponse.next(); // Allow access
    }
}

// Apply middleware only to protected routes
export const config = {
    matcher: ["/dashboard/:path*", "/profile/:path*", "/settings/:path*" , "/admin/:path*", "/"], // Protected routes
};
