import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "<@>/database/dbConnect";
import UserModal from "../../models/user";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sessioin = await getServerSession(req, res, authOptions);
  if (!sessioin?.user["_id"]) {
    throw new Error("Invalid request!!");
  }
  const userId = sessioin.user["_id"];
  dbConnect();
  const user = await UserModal.findById(userId);
  res.status(200).json(user.profiles[0]);
}
