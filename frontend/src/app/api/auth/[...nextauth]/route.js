import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login", // Optional: Custom sign-in page
  },
  callbacks: {
  async jwt({ token, user }) {
    console.log("JWT Callback: Before assigning user", token);

    // Agar user mila to token.user me set karo
    if (user) {
      token.user = {
        name: user.name,
        email: user.email,
        image: user.image,
      };
    }
    return token;
  },
  async session({ session, token }) {
    
    // Token se user session me set kar rahe hain
    if (token.user) {
      session.user = token.user;
    }

    console.log("Session Callback: After setting user", session);
    return session;
  },
  }
  
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; // App Router (App Directory)
export default handler; // Pages Router (Pages Directory)
