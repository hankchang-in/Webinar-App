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
  callbacks : {
    async signIn(user, account, profile) {
      return true;
    },
    async session({ session, token }) {
      session.user = token.user; // Pass user data to session
      return session;
    },
  }
  
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; // App Router (App Directory)
export default handler; // Pages Router (Pages Directory)
