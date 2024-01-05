import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface User {
  email: string;
  userId: string;
  role: string;
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          // console.log(user);

          if (user && (await compare(credentials.password, user.password))) {
            return { role: user.role, userId: user.userId };
          } else {
            return null;
          }
        } catch (error) {
          console.error(error);
          return new Error("An error occurred during authentication.");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && token.user) {
        session.user = token.user as User;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
