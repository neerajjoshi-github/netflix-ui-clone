import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "<@>/database/dbConnect";
import UserModal from "../../models/user";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

type favoriteType = {
  id: string | number;
  mediaType: "movie" | "tv";
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const favorite: favoriteType = JSON.parse(req.body);
  const sessioin = await getServerSession(req, res, authOptions);
  if (!sessioin?.user["_id"]) {
    throw new Error("Invalid request!!");
  }
  const userId = sessioin.user["_id"];
  if (req.method === "POST") {
    try {
      dbConnect();
      const user = await UserModal.findById(userId);
      const alreadyFavorite = user.profiles[0].favorites.find(
        (fav: favoriteType) =>
          fav.id == favorite.id && fav.mediaType === favorite.mediaType
      );

      if (alreadyFavorite === undefined) {
        user.profiles[0].favorites.push(favorite);
        user.save();
        res.status(200).json("Added to the list!!");
      } else {
        const newFavorites = user.profiles[0].favorites.filter(
          (fav: favoriteType) =>
            fav.id != favorite.id || fav.mediaType !== favorite.mediaType
        );
        user.profiles[0].favorites = newFavorites;
        user.save();
        res.status(200).json("Removed from the list!!");
      }
    } catch (error) {
      res.status(500).json("Something Went Wrong");
    }
  }

  // ! DELETE method does not seems to work in next js 13.3
  // if (req.method === "DELETE") {
  //   const newFavorites = user.profiles[0].favorites.filter(
  //     (fav: favoriteType) => {
  //       fav.id !== favorite.id || fav.mediaType !== favorite.mediaType;
  //     }
  //   );
  //   user.profiles[0].favorites = newFavorites;
  //   user.save();
  //   res.status(200).json("Removed from the list!!");
  // }
}
