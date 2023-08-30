import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const authOptions: any = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {label: "Email", type: "string"},
        password: {label: "Password", type: "string"}
      },

      async authorize(credentials) {
        // const { email, password } = credentials;
        const email = credentials?.email;
        const password = credentials?.password ?? "";
        
        console.log(credentials);
        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          console.log(user);
          const pwdMatch = await bcrypt.compare(password, user.password);
          console.log(pwdMatch)
          if (!pwdMatch) {
            return null;
          }

          return user;
        } catch (error) {}
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
