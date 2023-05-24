import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import UserModal from "../../../models/user";
import dbConnect from "<@>/database/dbConnect";
import bcrypt from "bcrypt";

type FavoriteType = {
  id: string;
  mediaType: string;
};

type ProfileType = {
  profileName: string;
  favorites: FavoriteType[];
};

export const authOptions: AuthOptions = {
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
      session.user = token.user as {
        userName: string;
        userEmail: string;
        userPassword: string;
        profiles: ProfileType[];
        _id: string;
      };
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
};

export default NextAuth(authOptions);
