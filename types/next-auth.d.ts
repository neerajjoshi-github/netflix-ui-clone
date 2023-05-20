import NextAuth, { DefaultSession } from "next-auth";

type FavoriteType = {
  id: string;
  mediaType: string;
};

type ProfileType = {
  profileName: string;
  favorites: FavoriteType[];
};

declare module "next-auth" {
  interface Session {
    user: {
      userName: string;
      userEmail: string;
      userPassword: string;
      profiles: ProfileType[];
      _id: string;
    } & DefaultSession["user"];
  }
}
