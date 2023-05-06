import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import UserModal from "../../../models/user";
import dbConnect from "<@>/database/dbConnect";
import bcrypt from "bcrypt";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        userEmail: {
          label: "Email",
          type: "text",
        },
        userPassword: {
          label: "Pasword",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.userEmail || !credentials?.userPassword) {
          throw new Error("Email and password required!");
        }

        dbConnect();
        const { userEmail, userPassword } = credentials;
        const user = await UserModal.findOne({ userEmail });
        if (!user) {
          throw new Error("Invalid email or password");
        }

        const isPasswordMatched = await bcrypt.compare(
          userPassword,
          user.userPassword
        );

        if (!isPasswordMatched) {
          throw new Error("Invalid email or password");
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = token.user as { email: string; name: string };
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  pages: {
    signIn: "/in/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
