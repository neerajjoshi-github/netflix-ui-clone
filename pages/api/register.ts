import { NextApiRequest, NextApiResponse } from "next";
import userSchema from "../../models/user";
import dbConnect from "<@>/database/dbConnect";
import bcrypt from "bcrypt";
import { signIn } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return;
  dbConnect();
  const { data } = req.body;
  const { userName, userEmail, userPassword } = data;
  if (!userName || !userEmail || !userPassword)
    return res.status(400).json("Missing input fields!!");
  // Check if email already exist
  const existingUser = await userSchema.find({ userEmail });
  console.log(existingUser);
  if (existingUser.length)
    return res.status(400).json("User already exist with this email id!");
  // Create new user
  const hashedPassword = await bcrypt.hash(userPassword, 12);
  const newUser = new userSchema({
    userName,
    userEmail,
    userPassword: hashedPassword,
    profiles: [
      {
        profileName: userName,
        favorites: [],
      },
    ],
  });
  newUser.save();
  const signInData = await signIn("credentials", {
    userEmail,
    userPassword,
    redirect: false,
    callbackUrl: "/dashboard",
  });
  console.log("signIn data from register func", signInData);
  res.status(200).json(newUser);
}
