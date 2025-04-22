import { LoginResponse, UserSession } from "@/types/auth/authType";
import type { DefaultSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";

declare module "next-auth" {
  interface Session {
    user: UserSession;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: UserSession;
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 1 day
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user && "data" in user) {
        token.user = user.data as UserSession; // Ensure user is stored properly
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user as UserSession;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
          {
            method: "POST",
            body: JSON.stringify(credentials),
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );
        const user: LoginResponse = await res.json();

        if (!res.ok || !user.data) {
          throw new Error("Invalid username or password");
        }

        const setCookieHeader = res.headers.get("Set-Cookie");
        if (setCookieHeader) {
          const token = setCookieHeader.split(";")[0].split("=")[1];
          (await cookies()).set({
            name: "access_token",
            value: token,
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
          });
        }

        return user; // Must return user data for NextAuth to store in JWT
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
  },
};
